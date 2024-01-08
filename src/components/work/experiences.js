import cnet from '../../assets/cnet.png';
import fh from '../../assets/FH-logo.png';
import northeastern from '../../assets/neu-logo.png';
import survue from '../../assets/survue-logo.png';


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
      textCol: "#FFFFFF",
      backCol: "#A91D22",
    },
    python: {
      name: "Python",
      textCol: "#FFFFFF",
      backCol: "#FF9900",
    },
    java: {
        name: "Java",
        textCol: "#FFFFFF",
        backCol: "#007ACC",
      },
      android: {
        name: "Android",
        textCol: "#FFFFFF",
        backCol: "#DD1B16",
      },
      firebase: {
        name: "Firebase",
        textCol: "#FFFFFF",
        backCol: "#DD1B16",
      },
      c: {
        name: "C",
        textCol: "#FFFFFF",
        backCol: "#DD1B16",
      },
      mongodb: {
        name: "MongoDB",
        textCol: "#FFFFFF",
        backCol: "#DD1B16",
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