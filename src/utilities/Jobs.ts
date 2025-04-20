import getDateDiff from "./DateDiffCalculator";

export const JOBS = [
  // Grandi
  {
    company: "Grandi y Asociados",
    position: "Developer - Internship",
    date: "Aug 2021 | Nov 2021",
    time: "[ 4 months ]",
    descriptions: [
      {
        description:
          "Created a Webhook in Java that cosumed services from ChatAPI and DriveAPI.",
        stack: [
          {
            main: "Java 8",
            sub: ["Spring Boot", "Maven", "Wildfly"],
          },
          {
            main: "SQL Server",
            sub: [],
          },
        ],
      },
    ],
  },
  // Integral
  {
    company: "Integral Software",
    position: "Fullstack Developer",
    date: "Dec 2021 | Apr 2022",
    time: "[ 5 months ]",
    descriptions: [
      {
        description:
          "Java development and maintenance of a health management system full cycle and RestAPI integration.",
        stack: [
          {
            main: "Java 8",
            sub: ["Spring Boot", "Maven", "Wildfly", "Hibernate", "JSP"],
          },
          {
            main: "SQL Server",
            sub: [],
          },
          {
            main: "Javascript",
            sub: ["jQuery", "AJAX"],
          },
        ],
      },
    ],
  },
  // GlobalLogic
  {
    company: "GlobalLogic - Latin America",
    position: "Junior Software Engineer",
    date: "May 2022 | Feb 2024",
    time: "[ 21 months ]",
    descriptions: [
      {
        description:
          "Microservice-oriented POC, social media-like application to create eco-friendly challenges.",
        stack: [
          {
            main: ".NET",
            sub: ["C#", "Entity Framework", "xUnit"],
          },
          {
            main: "SQL Server",
            sub: [],
          },
          {
            main: "MongoDB",
            sub: [],
          },
          {
            main: "ReactJS",
            sub: ["NextJS", "Redux"],
          },
        ],
      },
      {
        description:
          "Automated tests with xUnit and Selenium for a VB.NET project to generate a common base code for a multi-state offshore project.",
        stack: [
          {
            main: ".NET",
            sub: ["C#", "xUnit", "VB.NET"],
          },
          {
            main: "SQL Server",
            sub: [],
          },
          {
            main: "Selenium",
            sub: [],
          },
        ],
      },
      {
        description: "Microservices development with Go and Java.",
        stack: [
          {
            main: "Java",
            sub: ["Spring Boot", "Maven"],
          },
          {
            main: "Go",
            sub: ["Chi", "Go-ora"],
          },
          {
            main: "Oracle",
            sub: ["PL/SQL"],
          },
        ],
      },
    ],
  },
  {
    company: "Mercado Libre",
    position: "Software Engineer",
    date: "Mar 2024 | Present",
    time: getDateDiff(new Date(2024, 3, 18), new Date()),
    descriptions: [
      {
        description:
          "Microservices development.",
        stack: [
          {
            main: "Java",
            sub: ["Java 17", "Spring Boot 3"],
          },
          {
            main: "MySQL + NoSQL",
            sub: [],
          },
          {
            main: "AWS",
            sub: [],
          }
        ],
      }
    ]
  }
];
