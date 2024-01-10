import cnet from './assets/cnet.png';
import fh from './assets/FH-logo.png';
import northeastern from './assets/neu-logo.png';
import survue from './assets/survue-logo.png';
import Placeholder from './assets/holder.svg';
import RhythmRun from './assets/RhythmRun.png';
import pricetracker from './/assets/pricetracker.png';
import portland_brewery from './assets/portland_brewery.jpg';
import website from './assets/website-image.png';

export const technologies = {
    html: {
      name: "HTML",
      textCol: "#FFFFFF",
      backCol: "#f06529",
    },
    css: {
      name: "CSS",
      textCol: "#FFFFFF",
      backCol: "#264DE4",
    },
    javascript: {
      name: "JavaScript",
      textCol: "#FFFFFF",
      backCol: "#F0DB4F",
    },
    bootstrap: {
      name: "Bootstrap",
      textCol: "#FFFFFF",
      backCol: "#563D7C",
    },
    react: {
      name: "React",
      textCol: "#FFFFFF",
      backCol: "#61DBFB",
    },
    mySQL: {
      name: "MySQL",
      textCol: "#F29111",
      backCol: "#00758F",
    },
    python: {
      name: "Python",
      textCol: "#ffde57",
      backCol: "#4584b6",
    },
    java: {
        name: "Java",
        textCol: "#C41E3A",
        backCol: "#5382a1",
      },
      android: {
        name: "Android",
        textCol: "#073042",
        backCol: "#3DDC84",
      },
      firebase: {
        name: "Firebase",
        textCol: "#000000",
        backCol: "#FFA611",
      },
      c: {
        name: "C",
        textCol: "#FFFFFF",
        backCol: "#283593",
      },
      mongodb: {
        name: "MongoDB",
        textCol: "#00ED64",
        backCol: "#001E2B",
      },
};

export const experiences = [

  {
    title: "Completed Master's in Computer Science",
    company_name: "Northeastern University",
    company_link: "https://www.northeastern.edu/",
    icon: northeastern,
    date: "April 2024 (Expected)",
    bullets: [],
    technologies: [
      technologies.java,
      technologies.python,
      technologies.c,
      technologies.javascript,
      technologies.html,
      technologies.css,
      technologies.bootstrap,
      technologies.react,
      technologies.android,
      technologies.mySQL,
      technologies.firebase,
      technologies.mongodb,

    ]
  },

    {
        title: "Graduate Teaching Assistant",
        company_name: "Northeastern University",
        company_link: "https://www.northeastern.edu/",
        icon: northeastern,
        date: "September 2023 - Present",
        bullets: [
          "Graduate teaching assistant for CS 5001: Intensive Foundations of Computer Science and CS 5004: Object-Oriented Design.",
          "Lead weekly labs highlighting new Python/Java concepts and explaining best programming practices to students.",
          "Provide one-on-one guidance through office hours to answer questions, explain fundamental programming concepts, and help computer science students grasp challenging topics. ",
          "Collaborate with professors to facilitate lectures, grade assignments, and provide valuable feedback to help students develop better problem-solving and programming skills.",
        ],
        technologies: [
            technologies.java,
            technologies.python,
        ],
    },

    {
        title: "Contract Mobile Developer",
        company_name: "Survue.ai",
        company_link: "https://www.survue.ai/",
        icon: survue,
        date: "September 2023 - December 2023",
        bullets: [
          "Contracted to design and develop a prototype Android companion application for Survue's smart bike taillight.",
          "Implemented Firebase Realtime Database and Authentication, successfully managing user registration and secure authentication processes.",
          "Employed the Model-View-ViewModel (MVVM) architectural pattern to enhance app maintainability, enable efficient data management, and improve scalability.",
          "Actively contributed to a team-driven environment, adeptly employing Agile and Scrum methodologies and utilizing a Jira board for efficient project tracking and workflow management.",
        ],
        technologies: [
            technologies.java,
            technologies.android,
            technologies.firebase,
        ],
    },

    {
      title: "Began Master's in Computer Science",
      company_name: "Northeastern University",
      company_link: "https://www.northeastern.edu/",
      icon: northeastern,
      date: "September 2022",
      bullets: [],
      technologies: []
    },
    
    {
        title: "Technology Public Relations",
        icon: fh,
        date: "April 2017 - March 2022",
        bullets: [
          "Collaborated across teams and practice groups to provide strategic communication support and assistance to industry-leading clients, including AT&T, Fitbit, and Salesforce.",
          "Authored press releases, media pitches, blog posts, executive op-eds, and in-depth reports to highlight company data, industry trends, and company milestones.",
          "Partnered with public relations, marketing, engineering, and legal teams to internally test, validate, and publicly launch more than a dozen new Fitbit products, digital health initiatives, and other high-profile campaigns.",
        ],
        technologies: []
    },

    {
        title: "Technology Journalist",
        company_link: "https://www.cnet.com/",
        icon: cnet,
        date: "September 2011 - April 2017",
        bullets: [
          "Former journalist with nearly six years of experience writing about the latest technology news for CNET.com (2013 - 2017), BGR.com (2011 - 2013), and Droid-Life.com (2011)",
          "Produced in-depth written reviews and detailed videos on a wide variety of technology products, including mobile phones, fitness trackers, smartwatches, and other health and wellness products", 
        ],
        technologies: []
      },
  ];

export const projectsData = [
    {
        title: "E-Commerce Price Tracker",
        description: "A price tracking tool to automatically scrape product and pricing information from select retail websites and upload the data to a Google spreadsheet.",
        imageUrl: pricetracker, 
        link: "https://github.com/DanGraziano/HDwebscraper",
        technologies: [
          technologies.python,
        ]
    },

    {
        title: "RhythmRun Android App",
        description: "A running app to help athletes maintain a more consistent cadence by implementing a built-in metronome.",
        imageUrl: RhythmRun, 
        link: "https://github.com/DanGraziano/RhythmRun",
        technologies: [
          technologies.java,
          technologies.android,
          technologies.firebase,
        ]
    },

    {
        title: "Portland Brewery Tour",
        description: "A Python script that allows users to find the shortest walking distance to breweries in Portland, Maine.",
        imageUrl: portland_brewery, 
        link: "https://github.com/DanGraziano/most-efficient-bar-crawl-in-Portland-ME",
        technologies: [
          technologies.python,
        ]
    },

    {
      title: "Personal Website",
      description: "A personal portfolio website that introduces myself to potential employers and showcases my skills, work experience, and projects.",
      imageUrl: website, 
      link: "https://github.com/DanGraziano/PersonalWebsite",
      technologies: [
        technologies.html,
        technologies.css,
        technologies.bootstrap,
        technologies.react,
        technologies.javascript,
      ]
  },
];

