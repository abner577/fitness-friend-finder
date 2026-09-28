# How finding people nearby could work

## The plain answer

The app would not scan for nearby phones or need to watch where everyone goes. By default, it would ask to use the phone's location for finding friends. If the person does not allow that, they can enter a city instead.

The app then compares two people's areas and distance choices. It suggests someone only if they are close enough for **both** people. For example, if one person is happy to travel 45 miles but the other only wants people within 10 miles, a person 20 miles away would not be a fit for both.

## Where the location comes from

- **Phone location by default:** The app asks the phone for its location when the person opens the app, if they have given permission. This keeps nearby suggestions up to date as they move between areas.
- **City as a fallback:** If the person does not give permission or prefers not to use phone location, they enter a city. This still lets them find people nearby, though the distance is less exact.

The app does not need to follow someone while it is closed. A person should be able to switch to a chosen city later. Other people should see only a broad area, not their exact spot.

**Miami is an initial focus for finding the first users, not a boundary for the app.** Someone elsewhere could still sign up and look for nearby people. They may see fewer suggestions until more people join in their area.

## Is there a special tool for this?

There is no single "find me a fitness friend" tool that makes the whole match. A phone has a built-in way to share its location with permission. The app can use a ready-made location tool to get that information and another tool to compare how far apart two people are. The app still decides which sports and preferences make a good suggestion.

One possible tool for distance checks is **PostGIS**. In everyday terms, it helps an app quickly answer, "Is this person within the distance I chose?" It is a possible choice, not a decision we need to make before exploring the idea further.

If someone enters only a city, their distance is an estimate based on that city. That is good enough to suggest nearby people, though it may be less exact near the edge of a chosen distance.
