import React from "react";
import EventCard from "./EventCard";

const events = [
  {
    title: "Zach Wilson",
    description:
      "Zach Wilson is the quarterback. He's #2 and he's 24 years old.",
    link: "https://www.espn.com/nfl/player/_/id/4361259/zach-wilson",
  },
  {
    title: "Breece Hall",
    description:
      "Breece Hall is the runningback. He's #20 and he's 22 years old.",
    link: "https://www.espn.com/nfl/player/_/id/4427366/breece-hall",
  },
  {
    title: "Garret Wilson",
    description: "Garret Wilson is WR1. He's #17 and he's 23 years old.",
    link: "https://www.espn.com/nfl/player/_/id/4569618/garrett-wilson",
  },
  {
    title: "Allen Lazard",
    description: "Allen Lazard is WR2. He's #10 and he's 27 years old.",
    link: "espn.com/nfl/player/_/id/3128390/allen-lazard",
  },
  {
    title: "Randall Cobb",
    description: "Randall Cobb is WR3. He's #18 and he's 33 years old.",
    link: "https://www.espn.com/nfl/player/_/id/14053/randall-cobb",
  },
  {
    title: "Tyler Conklin",
    description: "Tyler Conklin is the tightend. He's #83 and is 28 years old.",
    link: "https://www.espn.com/nfl/player/_/id/3915486/tyler-conklin",
  },
  {
    title: "Nick Bawden",
    description: "Nick Bawden is the fullback. He's #48 and he's 27 years old.",
    link: "https://www.espn.com/nfl/player/_/id/3125232/nick-bawden",
  },
  {
    title: "Duane Brown",
    description:
      "Duane Brown is the left tackle. He's #76 and he's 38 years old.",
    link: "https://www.espn.com/nfl/player/_/id/11260/duane-brown",
  },
  {
    title: "Lake Tomlinson",
    description:
      "Lake Tomlinson is the left guard. He's #78 and he's 31 years old.",
    link: "https://www.espn.com/nfl/player/_/id/2512477/laken-tomlinson",
  },
  {
    title: "Connor Mcgovern",
    description:
      "Connor Mcgovern is the center. He's #60 and he's 30 years old.",
    link: "https://www.espn.com/nfl/player/_/id/2577367/connor-mcgovern",
  },
  {
    title: "Alijah Vera-Tucker",
    description:
      "Alijah Vera-Tucker is the right guard. He's #75 and he's 24 years old.",
    link: "https://www.espn.com/nfl/player/_/id/4259646/alijah-vera-tucker",
  },
  {
    title: "Mekhi Becton",
    description:
      "Mekhi Becton is the right tackle. He's #77 and he's 24 years old.",
    link: "https://www.espn.com/nfl/player/_/id/4240090/mekhi-becton",
  },
];

const EventList = () => {
  return (
    <div className="main-container">
      {events.map((event, index) => (
        <div className="event-card" key={index}>
          <EventCard
            title={event.title}
            description={event.description}
            link={event.link}
          />
        </div>
      ))}
    </div>
  );
};

export default EventList;
