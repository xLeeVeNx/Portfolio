import { DiReact } from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { DiJavascript1 } from "react-icons/di";

const ReactIcon = <DiReact className="skills__card-image" />;
const ReduxIcon = <SiRedux className="skills__card-image" />;
const JavaScriptIcon = <DiJavascript1 className="skills__card-image" />;

const skills = [
  {
    id: 0,
    name: "React",
    info: "React has been designed from the start for gradual adoption, and you can use as little or as much React as you need. Whether you want to get a taste of React, add some interactivity to a simple HTML page, or start a complex React-powered app, the links in this section will help you get started.",
    link: "https://reactjs.org/docs/getting-started.html",
    icon: ReactIcon,
  },
  {
    id: 1,
    name: "Redux",
    info: "Redux helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test.",
    link: "https://redux.js.org/",
    icon: ReduxIcon,
  },
  {
    id: 2,
    name: "JavaScript",
    info: "JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat.",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    icon: JavaScriptIcon,
  },
];

export default skills;
