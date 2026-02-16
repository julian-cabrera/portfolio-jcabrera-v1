export const RATING = {
  BEGINNER: {
    color: "#65859e",
    text: "Textbook knowledge, very little to no practical experience. Guidance would be much appreciated!",
  },
  INTERMEDIATE: {
    color: "#cc9d38",
    text: "Some experience, can do straightforward tasks although I would need a little help on complex tasks because I probably wouldn't be able to deal with complexity.",
  },
  ADVANCED: {
    color: "#cc5c47",
    text: "More experience, can do straightforward tasks to acceptable standards, can plan, analyze and achieve partial resolution on complex tasks.",
  },
};

export const SKILL_SET = {
  AI: [
    {
      name: "Practices",
      labels: [
        { name: "Prompting", rating: RATING.ADVANCED.color },
        { name: "Spec Driven Development", rating: RATING.INTERMEDIATE.color }
      ],
    },
    {
      name: "Tools",
      labels: [
        { name: "MCP", rating: RATING.INTERMEDIATE.color },
      ],
    }
  ],
  BACKEND: [
    {
      name: "Java",
      labels: [
        { name: "Java 8-21", rating: RATING.ADVANCED.color },
        { name: "Spring Framework", rating: RATING.ADVANCED.color },
        { name: "JUnit", rating: RATING.ADVANCED.color }
      ],
    },
    {
      name: ".NET",
      labels: [
        { name: "C#", rating: RATING.INTERMEDIATE.color },
        { name: "Entity Framework", rating: RATING.INTERMEDIATE.color },
        { name: "xUnit", rating: RATING.INTERMEDIATE.color }
      ],
    },
    {
      name: "Go",
      labels: [
        { name: "Go", rating: RATING.BEGINNER.color },
        { name: "Go Chi", rating: RATING.BEGINNER.color },
        { name: "Go Ora", rating: RATING.BEGINNER.color },
      ],
    },
    {
      name: "Data Storage",
      labels: [
        { name: "Relational", rating: RATING.ADVANCED.color },
        { name: "NoSQL", rating: RATING.ADVANCED.color }
      ],
    },
    {
      name: "Microservices",
      labels: [
        { name: "Service Design & Architecture", rating: RATING.ADVANCED.color },
        { name: "Observability & Telemetry", rating: RATING.ADVANCED.color },
        { name: "Resillience & Fault Tolerance", rating: RATING.ADVANCED.color },
        { name: "Cloud and Infrastructure", rating: RATING.INTERMEDIATE.color },
        { name: "DevOps", rating: RATING.INTERMEDIATE.color },
        { name: "Security in Distributed Systems", rating: RATING.ADVANCED.color },
      ],
    }
  ],
  FRONTEND: [
    {
      name: "JavaScript",
      labels: [
        { name: "JavaScript", rating: RATING.INTERMEDIATE.color },
        { name: "TypeScript", rating: RATING.INTERMEDIATE.color }
      ],
    },
    {
      name: "HTML & CSS",
      labels: [
        { name: "HTML", rating: RATING.ADVANCED.color },
        { name: "CSS", rating: RATING.ADVANCED.color },
        { name: "Bootstrap", rating: RATING.BEGINNER.color },
      ],
    },
    {
      name: "React",
      labels: [
        { name: "ReactJS", rating: RATING.ADVANCED.color },
        { name: "NextJS", rating: RATING.INTERMEDIATE.color },
        { name: "Redux", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "Selenium",
      labels: [{ name: "Selenium", rating: RATING.BEGINNER.color }],
    },
  ],
  GENERAL: [
    {
      name: "Languages",
      labels: [
        { name: "Spanish", rating: RATING.ADVANCED.color },
        { name: "English", rating: RATING.ADVANCED.color },
        { name: "German", rating: RATING.BEGINNER.color },
      ],
    },
    {
      name: "GIT",
      labels: [
        { name: "GitHub", rating: RATING.ADVANCED.color },
        { name: "GitLab", rating: RATING.ADVANCED.color },
        { name: "Bitbucket", rating: RATING.ADVANCED.color },
      ],
    },
    {
      name: "Agile",
      labels: [
        { name: "Scrum", rating: RATING.ADVANCED.color },
        { name: "Kanban", rating: RATING.ADVANCED.color },
      ],
    },
    {
      name: "Issue Tracker",
      labels: [
        { name: "Jira", rating: RATING.ADVANCED.color },
        { name: "Azure DevOps", rating: RATING.INTERMEDIATE.color },
      ],
    },
  ]
};
