import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  nitk,
  cluboard,
  cash_flow,
  freadom,
  bank,
  gdsc,
  iris,
  ecell,
  genesis,
  graphql,
  portfolio,
  publiclab,
  zulip,
  cdc,
  chargeswap,
  placeicon,
  recruitment,
  huntly,
  oracle,
  comicify_ai,
  greentrust,
  icc,
  usjp,
  blog,
  musicStore,
  screenlock,
  wefhss,
  todo,
  linkedin,
  ictsa
  
} from "../assets";

import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillMail,
  AiOutlineTwitter,
  AiFillHtml5,
  AiOutlineGoogle,
  AiOutlineGitlab,
} from "react-icons/ai";

import {
  SiDjango,
  SiSqlite,
  SiJavascript,
  SiBootstrap,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiPython,
  SiCplusplus,
  SiC,
  SiRubyonrails,
  SiJquery,
  SiVisualstudiocode,
  SiPostman,
  SiGit,
  SiMysql,
  SiSolidity,
  SiNetlify,
  SiChartdotjs,
  SiVite,
  SiArduino,
  SiWeb3Dotjs,
  SiIpfs,
  SiDotnet,
  SiTwilio,
  SiFlutter,
  SiReplit,
  SiFlask,
  SiFigma,
  SiGooglemaps,
  SiOpenai,
  SiGooglecloud,
  SiNextdotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiRedux
} from "react-icons/si";

import {
  FaHardHat
} from "react-icons/fa";

import {
  IoIosNotificationsOutline
} from "react-icons/io";

import { DiCss3, DiJava, DiMsqlServer, DiRuby } from "react-icons/di";

export const resumeLink = "https://drive.google.com/file/d/1wkPu9i_e2uAdHmbqe0hEM9BfBheJfxkT/view?usp=sharing";
export const repoLink = "https://github.com/mittal-parth/personal-portfolio";

export const callToAction = "https://www.linkedin.com/in/mittal-parth";

export const navLinks = [
  {
    id: "skills",
    title: "Skills & Experience",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "Certificates",
    title: "Certificates",
  },
  {
    id: "extraCurricular",
    title: "Extra Curricular",
  },
  {
    id: "contactMe",
    title: "Contact Me",
  },
];

export const educationList = [
  {
    id: "education-1",
    icon: usjp,
    title: "University of Sri Jayewardenepura",
    degree: "BSc (Hons) in Information Technology",
    content1: "Department of ICT",
    content2: "Faculty of humanities and Social sciences",
    duration: "Undergraduate From 2020",

  },  
  
  {

    id: "education-2",
    icon: icc,
    title: "Ibbagamuwa Central College",
    degree: "G.C.E. Advanced Level Examination",
    duration: "2016 - 2018",

  },

  
];

export const skills = [
  {
    title: "Programming Languages",
    items: [
      // {
      //   id: "pl-1",
      //   icon: SiCplusplus,
      //   name: "C++",
      // },
      {
        id: "pl-2",
        icon: SiPython,
        name: "Python",
      },
      // {
      //   id: "pl-3",
      //   icon: DiRuby,
      //   name: "Ruby",
      // },
      // {
      //   id: "pl-4",
      //   icon: SiC,
      //   name: "C",
      // },
      {
        id: "pl-5",
        icon: AiFillHtml5,
        name: "HTML",
      },
      {
        id: "pl-6",
        icon: DiCss3,
        name: "CSS",
      },
      {
        id: "pl-7",
        icon: SiJavascript,
        name: "JavaScript",
      },
      // {
      //   id: "pl-8",
      //   icon: SiSolidity,
      //   name: "Solidity",
      // },
      {
        id: "pl-9",
        icon: DiJava,
        name: "Java",
      },
    ],
  },
  {
    title: "Frameworks/Libraries",
    items: [


      {
        id: "f-3",
        icon: SiReact,
        name: "ReactJS",
      },
      {
        id: "f-3",
        icon: SiReact,
        name: "React Native",
      },
      {
        id: "f-4",
        icon: SiBootstrap,
        name: "Bootstrap",
      },
      {
        id: "f-5",
        icon: SiTailwindcss,
        name: "Tailwind CSS",
      },

      // {
      //   id: "f-7",
      //   icon: SiGraphql,
      //   name: "GraphQL",
      // },
      // {
      //   id: "f-8",
      //   icon: SiDotnet,
      //   name: ".NET",
      // },
    ],
  },
  {
    title: "Tools",
    items: [
      {
        id: "t-1",
        icon: SiMysql,
        name: "MySQL",
      },
      {
        id: "t-2",
        icon: SiPostman,
        name: "Postman",
      },
      {
        id: "t-3",
        icon: SiVisualstudiocode,
        name: "VS Code",
      },
      {
        id: "t-4",
        icon: SiGit,
        name: "Git",
      },
      {
        id: "t-5",
        icon: AiFillGithub,
        name: "GitHub",
      },
      {
        id: "t-6",
        icon: AiOutlineGitlab,
        name: "Gitlab",
      },
      {
        id: "t-7",
        icon: SiNetlify,
        name: "Netlify",
      },
      {
        id: "t-8",
        icon: SiMongodb,
        name: "MongoDB",
      },
    ],
  },
];

export const experiences = [

  // {
  //   organisation: "IRIS, NITK",
  //   logo: iris,
  //   link: "https://iris.nitk.ac.in/about_us",
  //   positions: [
  //     {
  //       title: "Tech Lead",
  //       duration: "Apr 2023 - Present",
  //       content: [
  //         {
  //           text: "Leading a team of 40+ students driving a digital transformation at NITK.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Lead",
  //       duration: "Apr 2022 - Present",
  //       content: [
  //         {
  //           text: "Managing a team of 6 student developers while also overlooking multiple modules.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Developer",
  //       duration: "Nov 2021 - Apr 2022",
  //       content: [
  //         {
  //           text: "Added Conditional Fields support to the Forms Module.",
  //           link: "",
  //         },
  //       ],
  //     },
  //     {
  //       title: "Web Developer Intern",
  //       duration: "Jun 2021 - Oct 2021",
  //       content: [
  //         {
  //           text: "Developed a multi-role approval flow system to facilitate data collection and display on the Institute's Department Websites.",
  //           link: "",
  //         },
  //       ],
  //     },
  //   ],
  // },
  {
    organisation: "We@FHSS",
    logo: wefhss,
    link: "http://fhss.sjp.ac.lk/mobile/",
    positions: [
      {
        title: "Back-end Developer",
        duration: "2022",
        content: [
          {
            text: "The latest app by USJ's Faculty of Humanities and Social Sciences offers personalized notifications, a university directory, profiles, and academic tracking.",
            link: "",
          },
          {
            text: "Developed and implemented APIs using Axios for a mobile application designed for faculty students and academic staff, including POST requests to register users' details into a database and GET queries to retrieve filtered details from another database.",
            link: "",
          },
        ],
      },
    ],
  },
];

export const openSourceContributions = [
  {
    id: "os-1",
    organisation: "Linkedin Learning",
    logo: linkedin,
    title:
      "Introduction to Deep Learning with OpenCV - by Jonathan Fernandes!",
    link: "https://www.linkedin.com/posts/sandaru99_certificate-of-completion-activity-6976414112650002432-Fn4j?utm_source=share&utm_medium=member_desktop1",
    date: "2022",

  },
  {
    id: "os-2",
    organisation: "Linkedin Learning",
    logo: linkedin,
    title:
      "Tensorflow for Artificial Intelligence, Machine Learning, and Deep Learning certificate course",
    link: "https://www.linkedin.com/posts/sandaru99_completion-certificate-for-introduction-to-activity-6976428464467795968-E3uf?utm_source=share&utm_medium=member_desktop",
    date: "2022",
  },
  {
    id: "os-3",
    organisation: "Linkedin Learning",
    logo: linkedin,
    title:
      "CompTIA Network+ (N10-007) Cert Prep: 7 Wireless, Virtual, Cloud, and Mobile Networking” by Mike Meyers!",
    link: "https://www.linkedin.com/posts/sandaru99_certificate-of-completion-activity-7047572147283607552-HOYX?utm_source=share&utm_medium=member_desktop",
    date: "2023",
  },

];

export const projects = [
  {
    id: "project-1",
    title: "Blog site web app",
    github: "https://github.com/sandaru-luckjaya99/blogsite-web-app",
    image: blog,
    content:
      "Created interactive blog site with MERN stack, from schema design to API integration. Developed entire app from scratch, including frontend, server-side programming, and database design. Gained foundational knowledge in MERN stack web development, including data modelling and API management.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "Mongodb"
      },
      {
        id: "icon-4",
        icon: SiOpenai,
        name: "OpenAI"
      },
      {
        id: "icon-5",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-6",
        icon: SiCss3,
        name: "CSS"
      },
    ],
  },
  {
    id: "project-2",
    title: "Music Store Mobile-app",
    github: "https://github.com/sandaru-luckjaya99/music-store-Mobile-App",
    image: musicStore,
    content:
      "Acquired foundational knowledge of React and its application in mobile app development, as well as experience using Figma for UI design. Gained experience implementing MongoDB as the database for a mobile app and working with APIs and Redux for state management.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiMongodb,
        name: "Mongodb"
      },
      {
        id: "icon-4",
        icon: SiPostman,
        name: "Postman"
      },
      {
        id: "icon-5",
        icon: SiRedux,
        name: "Redux"
      },
      {
        id: "icon-6",
        icon: SiFigma,
        name: "Figma"
      },
    ],
  },
  {
    id: "project-3",
    title: "Screen lock Mobile-app",
    github: "https://github.com/CommanderAstern/ChargeSwap",
    // link: "https://devfolio.co/projects/chargeswap-3527",
    image: screenlock,
    content:
      "Gained a basic Knowledge of developing mobile application.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiJavascript,
        name: "JavaScript"
      },
      {
        id: "icon-3",
        icon: SiHtml5,
        name: "HTML"
      },
      {
        id: "icon-4",
        icon: SiCss3,
        name: "CSS"
      },

    ],
  },
  {
    id: "project-4",
    title: "POS system Using Java  ",
    github: "https://github.com/sandaru-luckjaya99/point-of-sales-system-java-",
    image: placeicon,
    content:
      "Gained foundational knowledge of object-oriented programming concepts using Java",
    stack: [
      {
        id: "icon-1",
        icon: DiJava,
        name: "Java"
      },
    ],
  },
// TODO add the portfolio website link
  {
    id: "project-5",
    title: "Portfolio Website",
    github: "https://github.com/mittal-parth/personal-portfolio",
    link: "https://parthmittal.netlify.app/",
    image: portfolio,
    content: "Personal portfolio website with React and Tailwind CSS.",
    stack: [
      {
        id: "icon-1",
        icon: SiReact,
        name: "React"
      },
      {
        id: "icon-2",
        icon: SiTailwindcss,
        name: "Tailwind CSS"
      },
      {
        id: "icon-3",
        icon: AiFillHtml5,
        name: "HTML"
      },
    ],
  },

];

export const blogPosts = [
  {
    id: "post-1",
    title: "Blog Post 01 - Title",
    link: "#",
    date: new Date().toLocaleDateString(), // Can be edited to any string format
    image: "https://via.placeholder.com/600/92c952",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-2",
    title: "Blog Post 02 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/d32776",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
  {
    id: "post-3",
    title: "Blog Post 03 - Title",
    link: "#",
    date: new Date().toLocaleDateString(),
    image: "https://via.placeholder.com/600/771796",
    tags: [
      {
        id: "tag-1",
        name: "tag 01"
      },
      {
        id: "tag-2",
        name: "tag 03"
      },
      {
        id: "tag-3",
        name: "tag 03"
      },
    ],
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Organisations",
    value: "2+",
  },
  {
    id: "stats-2",
    title: "Issues Opened",
    value: "6+",
  },
  {
    id: "stats-3",
    title: "Pull Requests",
    value: "6+",
  },
];

export const extraCurricular = [
  {
    organisation: "ICTSA",
    title: "President",
    duration: "March 2022 - March 2023",
    content: [
      {
        text: "The Information and Communication Technology Student Association (ICTSA) takes great pride in being the acknowledged student association of the Department of ICT within the Faculty of Humanities and Social Sciences at the University of Sri Jayewardenepura.",
        link: "https://www.linkedin.com/posts/sandaru99_ictsa-departmentofict-fhss-activity-6925663227137732608-1VZz?utm_source=share&utm_medium=member_desktop",
      },
    ],
    logo: ictsa,
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: AiFillLinkedin,
    link: "https://www.linkedin.com/in/mittal-parth",
  },
  {
    id: "social-media-2",
    icon: AiFillGithub,
    link: "https://www.github.com/mittal-parth",
  },
  {
    id: "social-media-3",
    icon: AiFillMail,
    link: "mailto:mittalparth22@gmail.com",
  },
  {
    id: "social-media-4",
    icon: AiOutlineTwitter,
    link: "https://www.twitter.com/mittalparth_",
  },
  {
    id: "social-media-5",
    icon: AiFillInstagram,
    link: "https://www.instagram.com/mittalparth_",
  },
];

export const aboutMe = {
    name: "Sandaruwan Dahanake",
    tagLine: "MTS Intern @Oracle | ETHIndia'22 Winner | 8x Hackathon Winner | Tech Lead @IRIS, NITK | Co-Chair @GDSC, NITK",
    intro: "As an IT-loving undergrad, I've honed programming and research skills through projects. Eager to contribute expertise to your company. Check my portfolio web!"
}
