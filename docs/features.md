# Features and ideas

This is the one place to read about the app's features and later ideas. Some details are still open; see [Decisions and ideas](decisions-and-ideas.md) for what has been chosen.

## First version: finding fitness friends

### Profile and sign-up

People sign up as adults and make a profile with a name, age, photos they upload, and a short description. They can add hobbies outside fitness, music taste, personal qualities, and what they spend their time doing. If they want, they can say whether they are in college and what they study. Those details are optional; someone can make a useful profile without being a student.

People list the sports and fitness activities they do or want to try. The choices should cover many kinds of fitness, not just running. Examples include running, gym workouts, weightlifting, Brazilian jiu-jitsu (BJJ), mixed martial arts (MMA), boxing, kickboxing, rock climbing, hiking, soccer, hockey, cycling, and swimming. This is an example list, not a final limit.

For each activity, a person should be able to say both **how interested they are** and **whether or how often they do it**. Someone might love running and do it three times a week. They might have climbed once but want to try it again. A simple 1-to-5 interest level is one option. Plain choices such as "really into it," "do it often," "tried it," and "want to try it" are another. We have not chosen the exact labels or whether to use numbers.

The profile shows a general area, such as a city or neighborhood. It should not show an exact home or phone location.

### Location

The app asks to use the phone's location by default and refreshes it when the person opens the app, if they agree. If they do not want to share phone location, they can enter a city. The app uses that area to find people close enough for both people's distance choices. Miami is the first place to focus on finding users, but people elsewhere could use the app too. [How location could work](location.md) explains this more fully.

### People to see

The app suggests people based mostly on shared sports, how strongly they care about those sports, and distance. Shared music taste, hobbies, or college details could have a smaller say. For example, two runners could appear high in each other's suggestions, and a shared favorite music style might be a small extra reason to show them. We have not settled on an exact way to order every profile.

People can set preferences for their suggestions:

- **Distance:** How far away they are willing to look. Both people's distance choices should allow the connection.
- **Sports:** Which activities they especially want to find a friend for.
- **Gender:** An optional way to narrow who appears. The starting setting shows people of any gender, because this is a friendship app.
- **Age:** A preferred age range. If someone wants older friends, they can choose older ages. People in that range appear first, but other adults can still appear. This is a preference, not a strict cutoff.

The app is for adults only, regardless of someone's age preference.

### Likes, matches, and chat

People can like or pass on a suggested profile. Chat opens after both people like each other. The screen could use swipeable cards, buttons, or both; the exact look is still open.

Chat gives people a place to talk about an activity and make plans. A practical first version should also let someone leave a match, block a person, or report a problem. Those safety controls are recommendations to include before inviting real users.

### A suggested way to handle likes

This is a recommendation to settle before building the feature:

- **Explore:** See people you have not decided about and like or pass on them. You can like someone even if they have not liked you yet.
- **Interested in you:** See people who liked you first. You can like one back to make a match, or pass. If a profile was already open in Explore when their like arrived, liking it there should work the same way.
- **Matches:** Once both people have liked each other, show them in one shared match and let them chat. The message should say **"You matched"**, not "this person liked you back," because both people made the choice.

A person should not have to like the same person twice. After you like someone, their profile leaves your Explore list. If they liked you first, they move from Interested in you to Matches when you like them back. When the other person likes you too, the app checks the latest saved choices for that pair and makes one match. Both people see that same match, even if they tapped Like at nearly the same time. A profile card that was already open may be briefly out of date, but tapping it still checks those latest choices. Tapping Like twice by accident should not create two likes or two chats.

To keep notices clear, the first version could show new incoming likes inside the app and send a phone notification only for a new match. If both likes arrive close together, each person gets one match notice; an old "someone liked you" notice should not appear afterward. Whether to send phone notifications for one-sided likes is still open.

This suggested three-part flow is similar to [Hinge's explanation of Discover, Likes You, and Matches](https://help.hinge.co/hc/en-us/articles/360011090134-How-Do-I-Match-with-Someone-and-Start-Chatting). Tinder also describes a match as two people liking each other, though its page for seeing incoming likes is currently a paid feature: [Tinder overview](https://www.help.tinder.com/hc/en-us/articles/115004647686-Tinder-Overview), [Tinder Likes](https://www.help.tinder.com/hc/en-us/articles/115005246123-Likes). For a friendship app, the recommendation is to let everyone see incoming likes. These pages describe what people see; the one-match rule above is our own proposed way to handle the timing issue.

## Later ideas: sharing activities

### Activity posts and photos

People could post about any kind of fitness activity and add photos to the post. A post could say what they did, where it fits in their progress, and how it felt. The activity choices should stay broad: running, gym workouts, weightlifting, BJJ, MMA, boxing, kickboxing, climbing, hiking, team sports, and more.

Each kind of activity could have numbers that make sense for it. A run might show distance and time. A weightlifting post might show sets and repetitions. A hike might show distance and climbing. A martial arts session might simply show how long it lasted. A person should not need to fill in numbers that do not fit their activity.

### Health app imports

Optional health app imports are a later goal. People could choose to bring in available workout information from Apple Health or Android health apps. Posts should still work when they do not connect anything.

### Songs on posts

A person might want to attach a song to a post to show the mood of that workout. This is an idea that needs a closer look. A link to a song on a music service may be simpler than putting the audio into the post. We would need to check what a chosen music service allows before deciding how playback works. Adding a song should be optional.

## Later ideas: making plans together

### Built-in calendar

A built-in calendar is the preferred direction for a later version. A person could enter their usual free times, make a plan with a match, put the plan on the app's calendar, and get a reminder. The app could show when two people are both free without showing every private detail on either person's calendar.

### Outside calendars

Connecting Google Calendar or another calendar app is a possible extra feature later. It should not be required, since not everyone keeps an outside calendar up to date.

### Optional planning assistant

An AI assistant is a much later idea. It could suggest an activity and time based on what both people enjoy and the free times they choose to share. Both people would still decide whether to accept a plan.

## Later idea: improving suggestions

The app could improve its suggestions after learning which ones people actually find useful. Sports would remain the main focus, while shared music, hobbies, or college details could help a little.
