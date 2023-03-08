export const RATING = {
  BASIC: {
    color: "#ffffff",
    text: "Just starting out, I barely know the basics!",
  },
  BEGINNER: {
    color: "#1eff00",
    text: "Textbook knowledge, very little to no practical experience. Guidance would be much appreciated!",
  },
  INTERMEDIATE: {
    color: "#0070dd",
    text: "Some experience, can do straightforward tasks although I would need a little help on complex tasks because I probably wouldn't be able to deal with complexity.",
  },
  ADVANCED: {
    color: "#a335ee",
    text: "More experience, can do straightforward tasks to acceptable standards, can plan, analyze and achieve partial resolution on complex tasks.",
  },
  OVER9000: {
    color: "#ff8000",
    text: "Lot of experience, I feel very confident with this!",
  },
};

const SKILL_SET = {
  BACKEND: [
    {
      name: ".NET",
      labels: [
        { name: "C#", rating: RATING.ADVANCED.color },
        { name: "ASP.NET", rating: RATING.ADVANCED.color },
        { name: "Entity Framework", rating: RATING.ADVANCED.color },
        { name: "LinQ", rating: RATING.ADVANCED.color },
        { name: "Identity Server", rating: RATING.BEGINNER.color },
        { name: "xUnit", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "Java",
      labels: [
        { name: "Java 8", rating: RATING.INTERMEDIATE.color },
        { name: "Spring Framework", rating: RATING.INTERMEDIATE.color },
        { name: "Maven", rating: RATING.INTERMEDIATE.color },
        { name: "Hibernate", rating: RATING.INTERMEDIATE.color },
        { name: "Wildfly", rating: RATING.INTERMEDIATE.color },
        { name: "JSP", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "SQL",
      labels: [
        { name: "SQL", rating: RATING.ADVANCED.color },
        { name: "SQL Server", rating: RATING.ADVANCED.color },
        { name: "PostgreSQL", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "NoSQL",
      labels: [{ name: "MongoDB", rating: RATING.INTERMEDIATE.color }],
    },
    {
      name: "Python",
      labels: [
        { name: "Python", rating: RATING.BEGINNER.color },
        { name: "FastAPI", rating: RATING.BASIC.color },
        { name: "SQL Alchemy", rating: RATING.BASIC.color },
      ],
    },
    {
      name: "GRPC",
      labels: [{ name: "GRPC", rating: RATING.BEGINNER.color }],
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
        { name: "Vanilla", rating: RATING.ADVANCED.color },
        { name: "TypeScript", rating: RATING.INTERMEDIATE.color },
        { name: "Jest", rating: RATING.BEGINNER.color },
        { name: "jQuery", rating: RATING.INTERMEDIATE.color },
        { name: "AJAX", rating: RATING.INTERMEDIATE.color },
      ],
    },
    {
      name: "Node",
      labels: [{ name: "NodeJS", rating: RATING.BEGINNER.color }],
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
      name: "Flutter",
      labels: [
        { name: "Dart", rating: RATING.BASIC.color },
        { name: "Flutter", rating: RATING.BASIC.color },
      ],
    },
    {
      name: "Selenium",
      labels: [
        { name: "Selenium", rating: RATING.BEGINNER.color },
      ],
    },
  ],
  GENERAL: [
    {
      name: "Languages",
      labels: [
        { name: "Spanish", rating: RATING.OVER9000.color },
        { name: "English", rating: RATING.OVER9000.color },
        { name: "German", rating: RATING.BASIC.color },
      ],
    },
    {
      name: "GIT",
      labels: [
        { name: "GitHub", rating: RATING.ADVANCED.color },
        { name: "GitLab", rating: RATING.ADVANCED.color },
      ],
    },
    {
      name: "Agile",
      labels: [
        { name: "Scrum", rating: RATING.ADVANCED.color },
        { name: "Kanban", rating: RATING.INTERMEDIATE.color },
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
export default SKILL_SET;
