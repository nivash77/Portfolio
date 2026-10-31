export const projects = [
  {
    id: "etech",
    title: "E-Tech Learning Platform",
    year: "2025",
    category: "Full-stack",
    filters: ["full-stack", "java", "react"],
    tags: ["React", "Spring Boot", "Role-based access", "Certificates"],
    image: "/images/projects/etech.png",
    width: 1901,
    height: 873,
    alt: "E-Tech learning platform dashboard",
    summary:
      "A role-based learning platform where teachers publish courses and students earn certificates.",
    problem:
      "Teachers needed one place to publish courses, lessons, quizzes, and assignments. Students needed to enrol, submit work, and receive a certificate without leaving the platform.",
    approach:
      "I built a React client and a Spring Boot API with separate teacher and student roles. Course content, submissions, quizzes, and certificate records share one data model.",
    outcome:
      "The live app covers authentication, course management, assignment submission, quizzes, and certificates in one flow.",
    live: "https://e-tech-app.vercel.app",
    github: null,
    featured: true,
  },
  {
    id: "blog",
    title: "Blog Website",
    year: "2024",
    category: "Full-stack",
    filters: ["full-stack", "react"],
    tags: ["Next.js", "MongoDB", "REST API", "Comments"],
    image: "/images/projects/blog.png",
    width: 268,
    height: 188,
    alt: "Blog website project cover",
    summary:
      "A blog with posts, profiles, and comments, built with Next.js and MongoDB.",
    problem:
      "A blog needed posts, profiles, comments, and a fast reading experience without a separate CMS.",
    approach:
      "I used Next.js with MongoDB and REST API routes, so posts and comments are read and written through the same app.",
    outcome:
      "Readers can browse posts, comment, and manage profiles. The project is on GitHub.",
    live: null,
    github: "https://github.com/nivash77/BlogProject",
  },
  {
    id: "food",
    title: "Food Recipes App",
    year: "2024",
    category: "Full-stack",
    filters: ["full-stack", "react"],
    tags: ["React", "Express.js", "Recipe discovery"],
    image: "/images/projects/food.png",
    width: 512,
    height: 512,
    alt: "Food recipes app project cover",
    summary:
      "A recipe site for browsing dishes and learning from other cooks.",
    problem:
      "A recipe site needed a clear path from browsing dishes to reading a recipe.",
    approach:
      "I built the React interface and Express API around recipe discovery, search, and contributor profiles.",
    outcome:
      "The site lets visitors explore recipes from different contributors. The live build is on Vercel.",
    live: "https://topping-phi.vercel.app/",
    github: null,
  },
  {
    id: "ai-chat",
    title: "AI Chat App",
    year: "2024",
    category: "AI",
    filters: ["ai"],
    tags: ["Python", "Streamlit", "Gemini"],
    image: "/images/projects/ai-chat.png",
    width: 897,
    height: 824,
    alt: "AI chat app project cover",
    summary:
      "A conversational interface built on Gemini's prebuilt model.",
    problem:
      "I wanted a working conversational interface without building a model from scratch.",
    approach:
      "I connected Gemini's prebuilt model to a Streamlit interface and handled the chat state in Python.",
    outcome:
      "The app supports real-time conversation in a responsive interface. The code is on GitHub.",
    live: null,
    github: "https://github.com/nivash77/AI-CHAT-BOT",
  },
  {
    id: "library",
    title: "Library Management System",
    year: "2024",
    category: "Java",
    filters: ["java"],
    tags: ["Java", "OOP", "DAO", "Collections"],
    image: "/images/projects/library.jpg",
    width: 800,
    height: 600,
    alt: "Library management system project cover",
    summary:
      "A console library system built around the core OOP concepts.",
    problem:
      "A console library system needed to demonstrate the core OOP concepts in a real workflow.",
    approach:
      "I used Java with inheritance, abstraction, polymorphism, and encapsulation, plus the DAO pattern and collections for storage.",
    outcome:
      "The system handles books, members, and lending operations. The code is on GitHub.",
    live: null,
    github: "https://github.com/nivash77/LibraryManagement",
  },
];

export const projectFilters = [
  { id: "all", label: "All work" },
  { id: "full-stack", label: "Full-stack" },
  { id: "java", label: "Java" },
  { id: "react", label: "React" },
  { id: "ai", label: "AI" },
];
