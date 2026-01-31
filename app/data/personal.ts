import { ProfileType, ProjectType, JobType, HeroeType, PostType } from "@/types";

export const personalData = {
  profile: {
    _id: "profile-1",
    fullName: "Kunj Nakrani",
    headline: "AI Engineer & Systems Builder.",
    profileImage: {
      image: "https://github.com/Kunj-1087.png", // Placeholder
      lqip: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+F9PQAI8wNPvd7POQAAAABJRU5ErkJggg==",
      alt: "Kunj Nakrani Profile Picture",
    },
    shortBio: "Building intelligent systems with Python, modern web frameworks, and machine learning pipelines. Focused on end-to-end implementation—from data processing and model training to production-ready APIs and interfaces. Shipping real products, writing clean code, solving actual problems.",
    email: "kunjnakrani10@gmail.com",
    fullBio: [
      {
        _key: "bio-1",
        _type: "block",
        children: [
          {
            _key: "span-1",
            _type: "span",
            text: "I am a beginner-to-intermediate tech learner passionately focused on Data Science, AI, and Full-Stack Web Development. My journey is defined by a commitment to fundamentals, consistency, and long-term growth.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "bio-2",
        _type: "block",
        children: [
          {
            _key: "span-2",
            _type: "span",
            text: "I am actively exploring real-world problem solving in Fintech and the Stock Markets using data analysis and machine learning. I believe in 'Building in Public' and am always looking to collaborate on scalable tech products.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    location: "India",
    resumeURL: "#",
    og: "https://github.com/Kunj-1087.png",
    usage: [
      {
        _key: "usage-1",
        _type: "block",
        children: [
          {
            _key: "span-3",
            _type: "span",
            text: "Core Stack: Python (NumPy, Pandas), C++, JavaScript (React, Node.js). \nData & AI: Statistics, Data Analysis, Machine Learning Fundamentals, SQL, MongoDB. \nTools: Git, GitHub, VS Code.",
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
  } as ProfileType,

  projects: [
    {
      _id: "project-1",
      name: "AI Stock Market Analyzer",
      slug: "ai-stock-market-analyzer",
      tagline: "Predicting market trends using Python and Machine Learning.",
      projectUrl: "#",
      repository: "#",
      logo: "",
      coverImage: {
        image: "",
        alt: "Stock Market Graph",
        lqip: "",
      },
      description: [
        {
          _key: "desc-1",
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A Fintech application that utilizes historical stock data to visualize trends and predict future movements using basic ML models. Built with Python, Pandas, and Scikit-Learn."
            }
          ],
          markDefs: [],
          style: "normal"
        }
      ]
    },
    {
      _id: "project-2",
      name: "Portfolio Website",
      slug: "portfolio-website",
      tagline: "My digital garden built with Next.js and Tailwind CSS.",
      projectUrl: "https://kunjnakrani.vercel.app",
      repository: "https://github.com/kunjnakrani/portfolio",
      logo: "",
      coverImage: {
        image: "",
        alt: "Portfolio Cover",
        lqip: "",
      },
      description: [
        {
          _key: "desc-2",
          _type: "block",
          children: [
            {
              _type: "span",
              text: "A personal portfolio site designed to showcase my journey in Data Science and Web Development. Features a clean UI, dark mode, and optimized SEO."
            }
          ],
          markDefs: [],
          style: "normal"
        }
      ]
    },
    {
      _id: "project-3",
      name: "Customer Churn Prediction",
      slug: "customer-churn-prediction",
      tagline: "Analyzing customer behavior to prevent attrition.",
      projectUrl: "#",
      repository: "#",
      logo: "",
      coverImage: {
        image: "",
        alt: "Data Analysis Dashboard",
        lqip: "",
      },
      description: [
        {
          _key: "desc-3",
          _type: "block",
          children: [
            {
              _type: "span",
              text: "An exploratory data analysis project identifying key factors contributing to customer churn in the telecom sector. Implements logistic regression for classification."
            }
          ],
          markDefs: [],
          style: "normal"
        }
      ]
    }
  ] as ProjectType[],

  jobs: [
    {
      _id: "job-1",
      name: "Independent Developer",
      jobTitle: "Full-Stack & AI Engineer",
      logo: "/kn-logo.png",
      url: "#",
      description: "Designing and engineering scalable full-stack applications and AI-driven systems. Focused on building production-ready solutions, optimizing performance, and contributing to the open-source ecosystem.",
      startDate: "2026-01-01",
      endDate: "", // Present
    }
  ] as JobType[],

  heroes: [
    {
      _id: "hero-1",
      name: "Elon Musk",
      url: "https://twitter.com/elonmusk",
      met: false,
      _createdAt: "2023-01-01T00:00:00Z"
    },
    {
      _id: "hero-2",
      name: "Naval Ravikant",
      url: "https://twitter.com/naval",
      met: false,
      _createdAt: "2023-01-02T00:00:00Z"
    },
    {
      _id: "hero-3",
      name: "Andrej Karpathy",
      url: "https://twitter.com/karpathy",
      met: false,
      _createdAt: "2023-01-03T00:00:00Z"
    }
  ] as HeroeType[],

  posts: [] as PostType[],
};
