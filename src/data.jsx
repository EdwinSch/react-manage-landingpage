import {
  FaSquareFacebook,
  FaSquareYoutube,
  FaXTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa6";

import personA from "./assets/avatar-anisha.png";
import personB from "./assets/avatar-ali.png";
import personC from "./assets/avatar-richard.png";
import personD from "./assets/avatar-shanai.png";

export const navlinks = [
  { id: 1, text: "home", link: "#" },
  { id: 2, text: "pricing", link: "#" },
  { id: 3, text: "product", link: "#" },
  { id: 4, text: "about us", link: "#" },
  { id: 5, text: "careers", link: "#" },
  { id: 6, text: "community", link: "#" },
  { id: 7, text: "privacy policy", link: "#" },
];

export const summary = [
  {
    id: 1,
    usp: "Track company-wide progress",
    description:
      "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
  },
  {
    id: 2,
    usp: "Advanced built-in reports",
    description:
      "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
  },
  {
    id: 3,
    usp: "Everything you need in one place",
    description:
      "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
  },
];

export const testimonials = [
  {
    id: 1,
    image: personA,
    name: "Anisha Li",
    quote:
      "Manage has supercharged our team’s workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
  },
  {
    id: 2,
    image: personB,
    name: "Ali Bravo",
    quote:
      "We have been able to cancel so many other subscriptions since using Manage. There is no more cross-channel confusion and everyone is much more focused.",
  },
  {
    id: 3,
    image: personC,
    name: "Richard Watts",
    quote:
      "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
  },
  {
    id: 4,
    image: personD,
    name: "Shanai Gough",
    quote:
      "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
  },
];

export const socials = [
  {
    id: 1,
    url: "https://www.facebook.com",
    icon: <FaSquareFacebook />,
  },
  {
    id: 2,
    url: "https://www.youtube.com",
    icon: <FaSquareYoutube />,
  },
  {
    id: 3,
    url: "https://www.x.com",
    icon: <FaXTwitter />,
  },
  {
    id: 4,
    url: "https://www.pinterest.com",
    icon: <FaPinterest />,
  },
  {
    id: 5,
    url: "https://www.instagram.com",
    icon: <FaInstagram />,
  },
];
