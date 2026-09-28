# Proposed architecture

Supabase is now the chosen managed backend platform. The app is still notes, not implemented; Expo/EAS and the detailed design below remain recommendations. The first version is an iPhone and Android app for finding nearby fitness friends, mutually liking profiles, and chatting after a match. Posts and an in-app calendar come later.

## Recommended starting path

```text
React Native + Expo app (iOS and Android)
  |-- Supabase Auth: sign-up and sessions
  |-- Supabase Data API / narrowly scoped database functions: profiles, discovery, likes, matches, chat
  |-- Supabase Storage: profile photos
  |-- Supabase Realtime: new chat messages and match updates while the app is open
  `-- Expo notifications: optional new-match and message alerts
                |
         Managed PostgreSQL + PostGIS
```

Use Expo Application Services (EAS) to build and distribute the iOS and Android binaries from Windows. Expo's free tier can support early development, subject to its current limits. Apple developer credentials are still needed for signed iOS device builds and distribution. React Native shares most application code, but permissions, push notifications, store packaging, and device behavior still need testing on both platforms. [Expo EAS Build](https://docs.expo.dev/build/), [Expo pricing](https://expo.dev/pricing), [iOS device build requirements](https://docs.expo.dev/tutorial/eas/ios-development-build-for-devices/)

Supabase puts Postgres, authentication, file storage, realtime updates, and functions together. The app can call it directly using a publishable key **only with carefully tested Row Level Security (RLS)**. Any privileged credentials stay in server-side functions. Use migrations in source control for tables, indexes, functions, and policies. [Supabase database overview](https://supabase.com/docs/guides/database/overview), [React Native guide](https://supabase.com/docs/guides/auth/quickstarts/react-native), [API security](https://supabase.com/docs/guides/api/securing-your-api)

The product is called **Supabase**, a backend-as-a-service platform. Its official [Expo React Native quickstart](https://supabase.com/docs/guides/getting-started/quickstarts/expo-react-native) and [user-management example](https://github.com/supabase/supabase/tree/master/examples/user-management/expo-user-management) are starting points, not a ready-made fitness-friend application. The platform provisions Auth and a Postgres database and provides a generated Data API, Storage, Realtime, and project logs. Auth is a managed service backed by Postgres; authorization is expressed in app-specific Postgres grants and RLS policies; logs are provided by Supabase's observability services. We still must define the schema and permissions for profiles, private locations, likes, matches, chat, photos, and blocks. [Supabase Auth](https://supabase.com/docs/guides/auth), [RLS guide](https://supabase.com/docs/guides/database/postgres/row-level-security), [observability](https://supabase.com/docs/guides/observability)

The Supabase free plan is useful for prototyping, but its quotas and inactive-project pausing make it a poor guarantee for a public launch. Check current limits and budget for a paid plan before inviting users who expect a reliable service. [Supabase pricing](https://supabase.com/pricing), [project pausing](https://supabase.com/docs/guides/platform/free-project-pausing)

## Why SQL first

The core data is relational: a user has many activities and photos; one person likes another; two likes produce one match; only matched people can see a chat. PostgreSQL gives foreign keys, unique constraints, transactions, and precise queries for these rules. The same database can store messages and, later, posts and plans.

The app may have more profile reads than profile writes, but that does not make NoSQL automatically faster. Chat, likes, location refreshes, and eventually posts still generate writes. At first, query design and indexes matter more than read replicas or database category. Start with one managed Postgres database; measure real traffic before adding caches or replicas. Likely useful indexes include activity membership, discovery location, likes by sender/recipient, and messages by match and creation time. Paginate suggestions, messages, and later posts. Keep photo bytes in object storage, not database rows. [Postgres indexing guide](https://supabase.com/docs/guides/database/postgres/indexes)

A document database would become more attractive if the product's main data and access patterns were mostly independent documents. It would make mutual matching, relationship rules, and geographic filtering more work for this app. This is an architectural judgment, not a claim that SQL is faster for every read-heavy workload.

## First-version data and logic

| Area | Suggested approach |
| --- | --- |
| Accounts and profiles | Supabase Auth plus `profiles`, `activities`, `profile_activities`, and `profile_photos` tables. Store image files in Storage. |
| Location | Keep exact/coarse discovery coordinates in a restricted table; expose only a general area or distance band in profiles. Ask for location on app open with permission; allow a city-based fallback. |
| Suggestions | Use PostGIS to filter by distance, then rank by shared sports and other agreed preferences. Enforce **both** people's distance limits. A city-center location is approximate, especially near radius edges. |
| Likes and matches | Store one like per ordered user pair. Perform the mutual-like check and creation of one shared match in a database transaction/function with uniqueness constraints so simultaneous taps cannot create duplicate matches. |
| Chat | Store messages in Postgres, indexed by match and time. RLS allows only match participants to read and send. Use Realtime for delivery while online; the database remains the source of truth. |
| Safety | Block/report records and authorization checks must affect discovery, likes, chat, and media access before a public launch. |
| Notifications | Server-side code triggers optional match/message pushes through Expo after the underlying database change succeeds; keep push tokens and sending credentials private. |

PostGIS supports indexed spatial queries with a GiST index. Install it in a dedicated schema, as Supabase currently recommends. For the two-sided radius rule, a candidate passes only when the computed distance is within the viewer's radius **and** the candidate's radius. Restrict raw coordinates so a client cannot query another person's exact point. [Supabase PostGIS guide](https://supabase.com/docs/guides/database/extensions/postgis), [Expo push setup](https://docs.expo.dev/push-notifications/push-notifications-setup/)

## Where Vercel and AWS fit

Vercel can host a future marketing site, web companion, or separately built HTTP API. It does not distribute a native React Native binary or automatically include a Postgres database. Its free Hobby plan is currently restricted to personal, non-commercial use, so it should not be assumed to cover a business launch. [Vercel Functions](https://vercel.com/docs/functions), [Vercel Hobby plan](https://vercel.com/docs/plans/hobby), [Postgres on Vercel](https://vercel.com/docs/postgres)

An AWS-first version could use an API on EC2 (or another AWS compute service), RDS for PostgreSQL with PostGIS, object storage, authentication, and a realtime/notification solution. That gives more infrastructure control and more operational work. Choose it when there is a concrete requirement for AWS networking, custom server behavior, infrastructure ownership, or scale patterns the managed starting path cannot meet. AWS RDS is managed Postgres; EC2 is a server you operate. [AWS EC2 and RDS tutorial](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/TUT_WebAppWithRDS.html)

## Later: in-app calendar and posts

The calendar does not require a special database. Add `availability`, `plans`, `plan_participants`, and `reminder_jobs` tables when that feature is designed. Store actual plan times as UTC instants, retain each person's time zone for display and recurring availability, and define who can view or edit a plan. Start with one-off plans and simple availability; recurring schedules and conflict handling need separate product rules. A scheduled job can check due reminders and call a notification function. [Supabase scheduled functions](https://supabase.com/docs/guides/functions/schedule-functions)

For posts, add relational post and activity tables and keep uploaded media in Storage. Their read traffic may eventually justify caching, different media delivery, or read replicas, but that decision should follow measurements of query latency, concurrent users, bandwidth, and cost.

## Decisions to revisit before implementation

- Confirm the sign-in methods and whether phone verification is needed.
- Define location precision, retention, and the exact response shown to other people.
- Decide which events should create push notifications and how to avoid duplicate sends.
- Define whether the first release includes photos in chat, message deletion, and reporting workflows.
- Recheck vendor prices and quotas when implementation starts; they can change.
