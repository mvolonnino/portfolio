import logo from "./img/VolbeatsMusicLogo.png";
import comicbook from "./img/m&dc.png";

export const projects = [
  {
    id: 0,
    name: "Volbeats Music",
    url: "https://volbeats-music.web.app/",
    github: "https://github.com/mvolonnino/VolbeatsMusic",
    description: [
      "Music app that authenticates a user using Spotify’s Web API service and allows for playback through a connected Spotify Device.",
      "Tools used: React, Context API, HTML5, CSS, Firebase Hosting, Material UI, Spotify Web API, Spotify Auth",
    ],
    icon: logo,
  },
  {
    id: 1,
    name: "Avengers Twitter",
    url: "https://twitter-clone-8d418.web.app/",
    github: "https://github.com/mvolonnino/twitter-clone",
    description: [
      "Twitter with a Marvel Universe twist. Instead of signing up, you choose an avatar that is pre set from the Marvel Universe and tweet 'as that character'.",
      "Tools used: React, Context API, HTML5, CSS, Firebase Hosting, Material UI, Spotify Web API",
    ],
    icon:
      "https://i.pinimg.com/originals/d2/b6/d9/d2b6d9f420dd981e2387d7843e75feca.png",
  },
  {
    id: 2,
    name: "meMessenge!",
    url: "https://memessage-9f0a0.web.app/",
    github: "https://github.com/mvolonnino/meMessenger",
    description: [
      "Messenging app of the popular iMessage for desktop. It is a fun way to get people together and talking to anyone they would like.",
      "Tools used: React, HTML5, CSS, Firebase, Material UI, Google Auth",
    ],
    icon:
      "https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png",
  },
  {
    id: 3,
    name: "SuperHero Throwdown",
    url: "https://superhero-throwdown.herokuapp.com/",
    github: "https://github.com/egibbs834/Superhero-Throwdown-React",
    description: [
      "Full Stack app utilizing SuperHero API to have access to comic book characters that you can store in your own database to create your own 'universe' to fight the evils of the multiverse.",
      "Tools used: MERN stack. Mongodb, Express, React, and Node.js, MDBReact, Passport Auth",
    ],
    icon: comicbook,
  },
];
