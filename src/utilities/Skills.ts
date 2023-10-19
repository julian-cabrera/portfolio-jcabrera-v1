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
  BACKEND: [
    {
      name: ".NET",
      labels: [
        { name: "C#", rating: RATING.ADVANCED.color },
        { name: "ASP.NET", rating: RATING.ADVANCED.color },
        { name: "Entity Framework", rating: RATING.ADVANCED.color },
        { name: "LinQ", rating: RATING.ADVANCED.color },
        { name: "Identity Server", rating: RATING.BEGINNER.color },
        { name: "xUnit", rating: RATING.ADVANCED.color },
      ],
    },
    {
      name: "Java",
      labels: [
        { name: "Java 8-17", rating: RATING.ADVANCED.color },
        { name: "Spring Framework", rating: RATING.ADVANCED.color },
        { name: "Maven", rating: RATING.ADVANCED.color },
        { name: "Hibernate", rating: RATING.INTERMEDIATE.color },
        { name: "Wildfly", rating: RATING.INTERMEDIATE.color },
        { name: "JSP", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "Go",
      labels: [
        { name: "Go", rating: RATING.INTERMEDIATE.color },
        { name: "Go Chi", rating: RATING.INTERMEDIATE.color },
        { name: "Go Ora", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "SQL",
      labels: [
        { name: "SQL", rating: RATING.ADVANCED.color },
        { name: "SQL Server", rating: RATING.ADVANCED.color },
        { name: "PostgreSQL", rating: RATING.INTERMEDIATE.color },
        { name: "Oracle PL/SQL", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "NoSQL",
      labels: [{ name: "MongoDB", rating: RATING.INTERMEDIATE.color }],
    },
    {
      name: "Microservices",
      labels: [
        { name: "Logging", rating: RATING.INTERMEDIATE.color },
        { name: "Elastic Search", rating: RATING.INTERMEDIATE.color },
        { name: "Kibana", rating: RATING.INTERMEDIATE.color },
        { name: "RabbitMQ", rating: RATING.BEGINNER.color },
        { name: "Mass Transit", rating: RATING.BEGINNER.color },
        { name: "Docker", rating: RATING.BEGINNER.color },
        { name: "Kubernetes", rating: RATING.BEGINNER.color },
        { name: "RPC", rating: RATING.BEGINNER.color },
        { name: "gRPC", rating: RATING.BEGINNER.color },
      ],
    },
    {
      name: "Design Patterns",
      labels: [{ name: "Design Patterns", rating: RATING.INTERMEDIATE.color }],
    },
  ],
  FRONTEND: [
    {
      name: "JavaScript",
      labels: [
        { name: "JavaScript", rating: RATING.ADVANCED.color },
        { name: "TypeScript", rating: RATING.INTERMEDIATE.color },
        { name: "Jest", rating: RATING.BEGINNER.color },
        { name: "jQuery", rating: RATING.INTERMEDIATE.color },
        { name: "AJAX", rating: RATING.INTERMEDIATE.color },
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
        { name: "Jira", rating: RATING.INTERMEDIATE.color },
        { name: "Azure DevOps", rating: RATING.INTERMEDIATE.color },
      ],
    },
  ],
  OTHER: [
    {
      name: "Adobe",
      labels: [
        { name: "Figma", rating: RATING.ADVANCED.color },
        { name: "Photoshop", rating: RATING.INTERMEDIATE.color },
        { name: "Illustrator", rating: RATING.INTERMEDIATE.color },
      ],
    },
  ],
};
