# Decisions, recommendations, and open questions

## Decided so far

- The app is for making fitness friends, not for dating.
- The first version is for adults and starts in one city or nearby area. The city has not been chosen yet.
- People make profiles with their age, interests, sports, and other details about themselves.
- People can choose an area themselves or use their phone's location for nearby suggestions.
- Distance should work for both people: a suggestion needs to fit each person's chosen range.
- People can set preferences for whom they see, including sports, distance, gender, and age. The gender setting is optional and starts open to everyone.
- An age range is a **loose preference**. People in that range appear first, while other adults may still appear.
- Two people must both like each other before they can chat.
- Workout posts and health app connections come after the first version.

## Recommendations, not decisions

- Start with simple suggestions based mainly on shared sports and distance. Give more weight to sports a person says are important to them.
- Offer Like and Pass buttons even if the screen also supports swiping, so the app feels easy to use without learning gestures.
- Show only a broad area on profiles. Give people ways to leave a match, block someone, and report a problem before real users join.
- Keep phone location updates under the person's control. A chosen area should always be available if they do not want to share phone location.
- A mobile app for iPhone and Android seems like a good fit. Expo/React Native could help make one app for both; Supabase could help with accounts, saved profiles, and chat; PostGIS could handle distance checks. These are possible tools, not choices already made.

## Ideas for later

- Posts for many kinds of exercise, starting with simple entries people write themselves.
- Optional imports from Apple Health and Android health apps for numbers such as steps or distance, when those numbers are available and the person allows access.
- More ways to show when people are free or what kind of activity partner they want.
- Better suggestions after learning what people actually find useful.

## Questions raised so far

- **How can I find friends who share several fitness interests?** Profiles can list more than one sport and show which ones matter most. Suggestions can use that shared information.
- **Should people swipe, or just browse suggested profiles?** Mutual likes are decided. The exact screen is still open; buttons with optional swiping are the current recommendation.
- **How do apps show only people within a chosen distance? Is there an API or open-source tool for that?** The phone can provide a location with permission, or a person can choose an area. The app compares that area with other people's areas and distance choices. [The location note](location.md) explains this without technical steps.
- **Can someone choose to see older friends?** Yes. They can set a preferred age range. It changes who appears first, but does not hide every adult outside the range.
- **Could people post all kinds of fitness activities, and what numbers would those posts show?** That is a later idea. Simple posts could cover many sports; numbers such as steps or distance would only appear when they make sense and are available.

## Still open

- Which city should be the first place to try the app, and how will the first group of people join?
- What should a profile card show first so someone can tell whether an activity together would be fun?
- Should people share their usual workout days or times in the first version?
- Should hobbies and personal qualities change the order of suggestions, or simply help people decide when reading a profile?
- How should the app handle people who misuse profiles or chat before a wider launch?
