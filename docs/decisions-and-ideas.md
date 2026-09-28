# Decisions, recommendations, and open questions

## Decided so far

- The app is for making fitness friends, not for dating.
- The first version is for adults. Miami is the first place to focus on finding users, but the app should also work elsewhere.
- React Native is the choice for an iPhone and Android app. The founder works on Windows and does not have a Mac or Xcode.
- People make profiles with their age, photos, sports, and other details about themselves. Music taste, other hobbies, college status, and major can be added when relevant.
- Each activity can show interest and whether or how often someone does it, including if they want to try it. The exact labels or number scale are still open.
- Phone location is the default. With permission, it refreshes when the person opens the app. Entering a city is the fallback.
- Distance should work for both people: a suggestion needs to fit each person's chosen range.
- People can set preferences for whom they see, including sports, distance, gender, and age. The gender setting is optional and starts open to everyone.
- An age range is a **loose preference**. People in that range appear first, while other adults may still appear.
- Two people must both like each other before they can chat.
- Workout posts and optional Apple Health and Android health app imports come after the first version.

## Recommendations, not decisions

- Start with simple suggestions based mainly on shared sports and distance. Give more weight to sports a person says are important to them.
- Let shared music, hobbies, and college details help a little, while sports carry the most weight in suggestions.
- Offer Like and Pass buttons even if the screen also supports swiping, so the app feels easy to use without learning gestures.
- Use three places for the liking flow: Explore, Interested in you, and Matches. Each person can like the other once, and the pair can have only one match, even when both tap Like almost together. [The suggested flow](features.md#a-suggested-way-to-handle-likes) has examples.
- Show only a broad area on profiles. Give people ways to leave a match, block someone, and report a problem before real users join.
- Let people switch to a chosen city if they stop using phone location.
- Expo is one possible way to work on the React Native app from Windows and have an iPhone build made in the cloud. Supabase could help with accounts, saved profiles, and chat; PostGIS could handle distance checks. None of these supporting tools has been chosen yet. [Expo's Windows and iPhone explanation](https://docs.expo.dev/faq/)

## Feature list

Current features and later ideas are together in [Features and ideas](features.md). Workout posts and health app imports are planned for later. The calendar is a preferred later direction; song links and an optional planning assistant still need more thought.

## Questions raised so far

- **How can I find friends who share several fitness interests?** Profiles can list more than one sport and show which ones matter most. Suggestions can use that shared information.
- **Should people swipe, or just browse suggested profiles?** Mutual likes are decided. The exact screen is still open; buttons with optional swiping are the current recommendation.
- **What if two people see each other and tap Like almost at the same time?** Both likes count, but they create only one match and one chat. Neither person needs to like the other a second time. An incoming like and a completed match are different notices.
- **How do apps show only people within a chosen distance? Is there an API or open-source tool for that?** The phone can provide a location with permission, or a person can choose an area. The app compares that area with other people's areas and distance choices. [The location note](location.md) explains this without technical steps.
- **Can someone choose to see older friends?** Yes. They can set a preferred age range. It changes who appears first, but does not hide every adult outside the range.
- **Could people post all kinds of fitness activities, and what numbers would those posts show?** That is a later idea. Simple posts could cover many sports; numbers such as steps or distance would only appear when they make sense and are available.
- **Can the app be made for iPhone without owning a Mac?** React Native is the chosen app approach. A service such as Expo can make iPhone builds in the cloud from a Windows computer; a Mac may still be useful for some kinds of local iPhone testing. [Expo's explanation](https://docs.expo.dev/faq/)
- **Can a workout post include a song?** Possibly, but the allowed experience depends on the music service. A song link is worth exploring first. The app should not assume it can upload or replay someone else's music freely. [Apple's MusicKit terms](https://developer.apple.com/support/terms/apple-developer-program-license-agreement/), [Spotify's sharing options](https://developer.spotify.com/documentation/embeds/tutorials/creating-an-embed)
- **Does Miami have to be the only place people can join?** No. Miami is the first place to gather users; location-based suggestions can work elsewhere too.

## Still open

- How will the first group of people in Miami join, and how will the app feel useful in places with very few users?
- What should a profile card show first so someone can tell whether an activity together would be fun?
- Which words or numbers should describe someone's interest and involvement in each activity?
- Should the app send a phone notification for an incoming like, or only when both people have matched?
- Which non-fitness details should change the order of suggestions, and how much should they count?
- How much of a person's usual free time should a match be able to see?
- Which music service, if any, would work for song links or playback on posts?
- How should the app handle people who misuse profiles or chat before a wider launch?
