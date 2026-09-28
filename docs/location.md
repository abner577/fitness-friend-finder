# How finding people nearby could work

## The plain answer

The app would not scan for nearby phones or need to watch where everyone goes. Each person gives the app an area to use for finding friends. They can pick a city or neighborhood themselves, or choose to let the phone provide their current location.

The app then compares two people's areas and distance choices. It suggests someone only if they are close enough for **both** people. For example, if one person is happy to travel 45 miles but the other only wants people within 10 miles, a person 20 miles away would not be a fit for both.

## Where the location comes from

- **Chosen area:** The person selects an area. This works without giving the app permission to use the phone's location.
- **Phone location:** The person asks the app to use their current location. The phone asks for permission first. If permission is denied, the person can still choose an area themselves.

The app only needs to update the phone-based location when the person chooses to do so. It does not need to follow them throughout the day. Other people should see only a broad area, not their exact spot.

## Is there a special tool for this?

There is no single "find me a fitness friend" tool that makes the whole match. A phone has a built-in way to share its location with permission. The app can use a ready-made location tool to get that information and another tool to compare how far apart two people are. The app still decides which sports and preferences make a good suggestion.

One possible tool for distance checks is **PostGIS**. In everyday terms, it helps an app quickly answer, "Is this person within the distance I chose?" It is a possible choice, not a decision we need to make before exploring the idea further.

If someone chooses only a city or neighborhood, their distance is an estimate based on that area. That is good enough to suggest nearby people, though it may be less exact near the edge of a chosen distance.
