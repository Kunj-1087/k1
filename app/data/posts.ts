import { PostType } from "@/types";

export const localPosts: PostType[] = [
  {
    _id: "local-1",
    _createdAt: "2026-01-30T10:00:00Z",
    title: "Exploring AI: My First Steps Into Artificial Intelligence",
    slug: "exploring-ai-my-first-steps",
    description: "When I first heard about AI, it felt like something out of a sci-fi movie—robots, self-driving cars, and computers that could think like humans. But as I started learning web development and coding, I kept running into AI everywhere.",
    coverImage: {
      image: "/blog/b1.jpg",
      alt: "Artificial Intelligence Concept",
      lqip: "",
    },
    tags: ["AI", "Learning", "Tech"],
    author: {
      name: "Kunj Nakrani", 
      photo: {
        image: "/about-profile.jpg", // Using the profile image we just added
        alt: "Kunj Nakrani",
      },
      twitterUrl: "https://twitter.com/kunjnakrani", // Placeholder or if known
    },
    body: [
      {
        _key: "1",
        _type: "block",
        children: [
          {
            _key: "1a",
            _type: "span",
            text: "When I first heard about AI, it felt like something out of a sci-fi movie—robots, self-driving cars, and computers that could think like humans. But as I started learning web development and coding, I kept running into AI everywhere. From ChatGPT helping me debug code to recommendation algorithms on Netflix, AI wasn't just futuristic—it was already part of my daily life.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "2",
        _type: "block",
        children: [
          {
            _key: "2a",
            _type: "span",
            text: "That's when I decided: I need to understand what AI actually is.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3",
        _type: "block",
        children: [
          {
            _key: "3a",
            _type: "span",
            text: "What Is AI, Really?",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "4",
        _type: "block",
        children: [
          {
            _key: "4a",
            _type: "span",
            text: "At its core, Artificial Intelligence is about making computers perform tasks that normally require human intelligence. Things like recognizing faces in photos, understanding voice commands, or predicting what you might want to buy next.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "5",
        _type: "block",
        children: [
          {
            _key: "5a",
            _type: "span",
            text: "But here's what surprised me: AI isn't one single technology. It's more like an umbrella term covering different approaches:",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6",
        _type: "block",
        children: [
          {
            _key: "6a",
            _type: "span",
            text: "Machine Learning (ML): Teaching computers to learn from data instead of programming every rule manually. \nNatural Language Processing (NLP): Helping computers understand and generate human language. \nComputer Vision: Enabling computers to 'see' and interpret images. \nNeural Networks: Systems inspired by how our brains work.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "7",
        _type: "block",
        children: [
          {
            _key: "7a",
            _type: "span",
            text: "The key difference between traditional programming and AI? In regular coding, I tell the computer exactly what to do step by step. With AI, I give it data and examples, and it figures out the patterns on its own.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "8",
        _type: "block",
        children: [
          {
            _key: "8a",
            _type: "span",
            text: "My \"Aha!\" Moment",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
       {
        _key: "9",
        _type: "block",
        children: [
          {
            _key: "9a",
            _type: "span",
            text: "I was stuck thinking AI was impossibly complex until I tried a simple example. I watched a tutorial where someone built a spam email detector using Machine Learning.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "10",
        _type: "block",
        children: [
          {
            _key: "10a",
            _type: "span",
            text: "Here's the simple version of how it worked:",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "11",
        _type: "block",
        children: [
           {
            _key: "11a",
            _type: "span",
            text: "Feed the system thousands of emails labeled 'spam' or 'not spam'. The algorithm finds patterns (like certain words that appear more in spam). When a new email arrives, it predicts whether it's spam based on those patterns.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "blockquote",
      },
        {
        _key: "12",
        _type: "block",
        children: [
          {
            _key: "12a",
            _type: "span",
            text: "That's when it clicked: AI is really about pattern recognition. The computer isn't \"thinking\" like a human—it's finding patterns in massive amounts of data faster than we ever could.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
       {
        _key: "13",
        _type: "block",
        children: [
          {
            _key: "13a",
            _type: "span",
            text: "What I Learned (And What Confused Me)",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "14",
        _type: "block",
        children: [
          {
            _key: "14a",
            _type: "span",
            text: "Key Takeaways:\nAI needs data to learn—lots of it.\nThe quality of data matters more than the quantity.\nAI is great at specific tasks but not \"general intelligence\" (yet).\nMost AI tools I use daily are powered by Machine Learning.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
       {
        _key: "15",
        _type: "block",
        children: [
          {
            _key: "15a",
            _type: "span",
            text: "Things That Confused Me:\nAt first, I thought AI and Machine Learning were the same thing. They're not. AI is the broader concept, and Machine Learning is one way to achieve it. It's like saying \"vehicle\" vs. \"car\"—all cars are vehicles, but not all vehicles are cars.\nI also struggled with understanding how neural networks \"learn.\" I kept imagining a brain inside a computer. But really, it's just math—lots of calculations adjusting weights and biases until the predictions get better.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
       {
        _key: "16",
        _type: "block",
        children: [
          {
            _key: "16a",
            _type: "span",
            text: "How This Helps in Real Projects",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
       {
        _key: "17",
        _type: "block",
        children: [
          {
            _key: "17a",
            _type: "span",
            text: "Understanding AI basics has already changed how I think about projects:\nWhen building a website, I now consider: \"Could AI improve the user experience here?\"\nI'm not intimidated by AI tools anymore—I actually use them to help me code.\nI can have informed conversations about tech trends instead of just nodding along.\nEven as a beginner, knowing AI fundamentals helps me see where the tech world is heading. Jobs are increasingly asking for \"AI familiarity,\" and now I at least understand what that means.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
       {
        _key: "18",
        _type: "block",
        children: [
          {
            _key: "18a",
            _type: "span",
            text: "Practical Applications I'm Excited About",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
       {
        _key: "19",
        _type: "block",
        children: [
          {
            _key: "19a",
            _type: "span",
            text: "Here are some beginner-friendly ways I'm planning to explore AI:\nUsing Python libraries like TensorFlow or scikit-learn to build simple models.\nExperimenting with AI APIs (like OpenAI or Hugging Face) in my web projects.\nBuilding a small recommendation system or chatbot.\nUnderstanding how AI tools I already use (like GitHub Copilot) actually work.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "20",
        _type: "block",
        children: [
          {
            _key: "20a",
            _type: "span",
            text: "Final Thought:",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
       {
        _key: "21",
        _type: "block",
        children: [
          {
            _key: "21a",
            _type: "span",
            text: "AI isn't just for researchers or PhD students anymore. It's becoming a tool that developers at every level can use and understand. And honestly? That's pretty exciting.\nIf you're also just starting out, my advice is simple: don't be intimidated. Start small, experiment, and remember that everyone learning AI today was once exactly where you are now.\n\nThis is part of my learning journey in tech. I'm documenting what I learn as I explore Full-Stack Development, AI, and Data Science. Feel free to connect if you're on a similar path!",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
    ],
    isPublished: true,
    featured: true,
  },
  {
    _id: "local-2",
    _createdAt: "2026-01-31T10:00:00Z",
    title: "My Introduction to Data Science: Making Sense of the Data World",
    slug: "introduction-to-data-science",
    description: "A few weeks ago, I was scrolling through job listings for tech roles, and I noticed something interesting: almost every position mentioned \"data-driven decisions\" or \"analytics experience.\"",
    coverImage: {
      image: "/blog/b2.jpg",
      alt: "Data Science Concept",
      lqip: "",
    },
    tags: ["Data Science", "Learning", "Tech"],
    author: {
      name: "Kunj Nakrani",
      photo: {
        image: "/about-profile.jpg",
        alt: "Kunj Nakrani",
      },
      twitterUrl: "https://twitter.com/kunjnakrani",
    },
    body: [
      {
        _key: "1",
        _type: "block",
        children: [
          {
            _key: "1a",
            _type: "span",
            text: "A few weeks ago, I was scrolling through job listings for tech roles, and I noticed something interesting: almost every position mentioned \"data-driven decisions\" or \"analytics experience.\" Even roles that weren't specifically about data science wanted people who could work with data.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "2",
        _type: "block",
        children: [
          {
            _key: "2a",
            _type: "span",
            text: "That got me thinking: what exactly is data science, and why does everyone suddenly care about it?",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3",
        _type: "block",
        children: [
          {
            _key: "3a",
            _type: "span",
            text: "So I started digging in, and what I found was way more interesting (and less scary) than I expected.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "4",
        _type: "block",
        children: [
          {
            _key: "4a",
            _type: "span",
            text: "What Is Data Science?",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "5",
        _type: "block",
        children: [
          {
            _key: "5a",
            _type: "span",
            text: "Here's how I understand it now: Data Science is the process of extracting useful insights from raw data.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6",
        _type: "block",
        children: [
          {
            _key: "6a",
            _type: "span",
            text: "Think about it like being a detective. You have clues (data) scattered everywhere, and your job is to piece them together to solve a mystery (answer business questions or make predictions).",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "7",
        _type: "block",
        children: [
          {
            _key: "7a",
            _type: "span",
            text: "Data Science sits at the intersection of three key areas:",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "8",
        _type: "block",
        children: [
          {
            _key: "8a",
            _type: "span",
            text: "Programming: Writing code to process and analyze data\nStatistics: Using math to find patterns and make predictions\nDomain Knowledge: Understanding the real-world context of the data",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "9",
        _type: "block",
        children: [
          {
            _key: "9a",
            _type: "span",
            text: "What surprised me most? Data scientists spend about 80% of their time just cleaning and preparing data. The fancy machine learning models everyone talks about? That's only a small part of the job.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "10",
        _type: "block",
        children: [
          {
            _key: "10a",
            _type: "span",
            text: "Breaking Down the Data Science Process",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "11",
        _type: "block",
        children: [
          {
            _key: "11a",
            _type: "span",
            text: "When I first looked into data science, I thought it was all about building complex algorithms. But the actual workflow is much more practical:",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "12",
        _type: "block",
        children: [
          {
            _key: "12a",
            _type: "span",
            text: "1. Ask the Right Questions\nBefore touching any data, you need to know what problem you're solving. \"Why are customers leaving?\" is better than \"Let's analyze all our data.\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "13",
        _type: "block",
        children: [
          {
            _key: "13a",
            _type: "span",
            text: "2. Collect Data\nThis could be from databases, APIs, web scraping, or even CSV files. As a beginner, I started with public datasets from sites like Kaggle.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "14",
        _type: "block",
        children: [
          {
            _key: "14a",
            _type: "span",
            text: "3. Clean the Data\nReal-world data is messy—missing values, duplicates, weird formats. This step takes forever but is crucial.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "15",
        _type: "block",
        children: [
          {
            _key: "15a",
            _type: "span",
            text: "4. Explore and Visualize\nCreate charts and graphs to spot patterns. Tools like Python's Matplotlib or even Excel work great for this.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "16",
        _type: "block",
        children: [
          {
            _key: "16a",
            _type: "span",
            text: "5. Build Models (If Needed)\nUse statistics or machine learning to make predictions or find deeper insights.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "17",
        _type: "block",
        children: [
          {
            _key: "17a",
            _type: "span",
            text: "6. Communicate Findings\nThe best analysis means nothing if you can't explain it clearly to others.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "18",
        _type: "block",
        children: [
          {
            _key: "18a",
            _type: "span",
            text: "My First Hands-On Experience",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "19",
        _type: "block",
        children: [
          {
            _key: "19a",
            _type: "span",
            text: "I decided to try a simple project: analyzing my own screen time data.\nI exported my phone's weekly screen time report and loaded it into a basic Python script. Using a library called Pandas, I:\n\nCalculated my average daily screen time\nIdentified which apps I used most\nFound patterns (I use social media way more on weekends)\n\nWas it groundbreaking? No. But it was real data science in action, and suddenly the concept clicked.\nThe best part? I didn't need fancy tools or years of experience. Just Python, some curiosity, and a dataset that actually mattered to me.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "20",
        _type: "block",
        children: [
          {
            _key: "20a",
            _type: "span",
            text: "What I Learned (And What Surprised Me)",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "21",
        _type: "block",
        children: [
          {
            _key: "21a",
            _type: "span",
            text: "Key Takeaways:\n\nData science isn't just for scientists—it's a practical skill anyone can learn\nYou don't need big data to start; small datasets teach the same principles\nVisualization is incredibly powerful for understanding patterns\nPython and its libraries (Pandas, NumPy, Matplotlib) are beginner-friendly",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "22",
        _type: "block",
        children: [
          {
            _key: "22a",
            _type: "span",
            text: "Things That Surprised Me:\nI thought data science required advanced math. While statistics help, you can start learning the basics with just high school-level math. Most libraries handle the complex calculations for you.\nI also didn't realize how much storytelling matters. A data scientist who can explain findings in simple terms is more valuable than one who only knows complex algorithms.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "23",
        _type: "block",
        children: [
          {
            _key: "23a",
            _type: "span",
            text: "Real-World Applications That Got Me Excited",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "24",
        _type: "block",
        children: [
          {
            _key: "24a",
            _type: "span",
            text: "Once I understood the basics, I started noticing data science everywhere:\n\nNetflix recommendations: Analyzing what you watch to suggest new shows\nFraud detection: Banks spotting unusual transactions in real-time\nHealthcare: Predicting disease outbreaks or patient outcomes\nE-commerce: Dynamic pricing based on demand patterns\nSports analytics: Teams using data to draft players and plan strategies\n\nEven small businesses use data science—like a local coffee shop analyzing sales data to decide which products to stock.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "25",
        _type: "block",
        children: [
          {
            _key: "25a",
            _type: "span",
            text: "How This Connects to My Learning Path",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "26",
        _type: "block",
        children: [
          {
            _key: "26a",
            _type: "span",
            text: "As someone exploring web development and AI, data science fits perfectly:\n\nWith Web Development: I can build dashboards that visualize data for users\nWith AI/ML: Data science provides the foundation—you need clean, analyzed data before building models\nCareer-wise: Data skills make me more versatile and valuable in the job market\n\nUnderstanding data science also helps me make better decisions in my own projects. Should I add a feature? Let the data tell me what users actually need.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "27",
        _type: "block",
        children: [
          {
            _key: "27a",
            _type: "span",
            text: "Tools I'm Learning",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "28",
        _type: "block",
        children: [
          {
            _key: "28a",
            _type: "span",
            text: "Here's my beginner-friendly toolkit so far:\n\nPython: The most popular language for data science\nPandas: For working with tables and spreadsheets in code\nNumPy: For numerical calculations\nMatplotlib/Seaborn: For creating visualizations\nJupyter Notebooks: For writing and testing code interactively\n\nI'm also exploring SQL because most real-world data lives in databases, not CSV files.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "29",
        _type: "block",
        children: [
          {
            _key: "29a",
            _type: "span",
            text: "What's Next for Me?",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "30",
        _type: "block",
        children: [
          {
            _key: "30a",
            _type: "span",
            text: "My data science learning roadmap:\n\nComplete a beginner Python course focused on data analysis\nWork through a few Kaggle datasets to practice\nLearn basic statistics (mean, median, correlation, probability)\nBuild a small portfolio project—maybe analyzing public data about my city\nExplore how data science integrates with machine learning",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "31",
        _type: "block",
        children: [
          {
            _key: "31a",
            _type: "span",
            text: "My Goal:\nI'm not trying to become a data scientist overnight. But I want to be comfortable working with data, asking the right questions, and finding insights that matter.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "32",
        _type: "block",
        children: [
          {
            _key: "32a",
            _type: "span",
            text: "Final Thoughts",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "33",
        _type: "block",
        children: [
          {
            _key: "33a",
            _type: "span",
            text: "Data science isn't just a buzzword—it's a practical skill that's changing how we make decisions. And the best part? You don't need a PhD to get started.\nIf you're also beginning your tech journey, I'd say data science is worth exploring. It teaches you to think critically, solve real problems, and communicate findings clearly—skills that matter in any tech role.\nStart small. Pick a dataset you're genuinely curious about. And remember: every data scientist started by asking \"What does this data actually mean?\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "34",
        _type: "block",
        children: [
          {
            _key: "34a",
            _type: "span",
            text: "Follow along as I continue learning Full-Stack Development, AI, and Data Science. Sharing my journey one blog at a time!",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      }
    ],
    isPublished: true,
    featured: true,
  },
  {
    _id: "local-3",
    _createdAt: "2026-02-01T10:00:00Z",
    title: "Some Days I Build. Some Days I Just Show Up.",
    slug: "some-days-i-build",
    description: "There's this myth in tech that successful developers are constantly shipping projects, learning new frameworks, and grinding leetcode at 2 AM. That every day is productive, every commit is meaningful, and progress is always linear.",
    coverImage: {
      image: "/blog/b3.jpg",
      alt: "Coding Motivation",
      lqip: "",
    },
    tags: ["Learning", "Mindset", "Productivity"],
    author: {
      name: "Kunj Nakrani",
      photo: {
        image: "/about-profile.jpg",
        alt: "Kunj Nakrani",
      },
      twitterUrl: "https://twitter.com/kunjnakrani",
    },
    body: [
      {
        _key: "1",
        _type: "block",
        children: [
          {
            _key: "1a",
            _type: "span",
            text: "There's this myth in tech that successful developers are constantly shipping projects, learning new frameworks, and grinding leetcode at 2 AM. That every day is productive, every commit is meaningful, and progress is always linear.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "2",
        _type: "block",
        children: [
          {
            _key: "2a",
            _type: "span",
            text: "Let me tell you: that's not real life. At least not mine.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3",
        _type: "block",
        children: [
          {
            _key: "3a",
            _type: "span",
            text: "The Reality of Learning to Code",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "4",
        _type: "block",
        children: [
          {
            _key: "4a",
            _type: "span",
            text: "Some days, I'm on fire. I'll build a feature, fix bugs, understand a concept that's been confusing me for weeks, and feel like I'm actually becoming a developer.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "5",
        _type: "block",
        children: [
          {
            _key: "5a",
            _type: "span",
            text: "Other days? I open VS Code, stare at my screen for 20 minutes, close it, and watch YouTube videos about coding instead of actually coding.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6",
        _type: "block",
        children: [
          {
            _key: "6a",
            _type: "span",
            text: "And you know what I've realized? Both types of days matter.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "7",
        _type: "block",
        children: [
          {
            _key: "7a",
            _type: "span",
            text: "The \"Just Showing Up\" Days",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "8",
        _type: "block",
        children: [
          {
            _key: "8a",
            _type: "span",
            text: "Last week, I had one of those days. I sat down to work on my JavaScript project, but my brain felt like mush. Nothing was clicking. Simple syntax I'd used a hundred times suddenly looked foreign.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "9",
        _type: "block",
        children: [
          {
            _key: "9a",
            _type: "span",
            text: "I could've called it quits. Told myself \"I'm not cut out for this\" or \"I'll try again tomorrow when I'm more motivated.\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "10",
        _type: "block",
        children: [
          {
            _key: "10a",
            _type: "span",
            text: "Instead, I did something small:\n\nReviewed my notes from a previous lesson\nFixed one tiny bug I'd been ignoring\nRead through someone else's code on GitHub\nWatched a 10-minute tutorial",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "11",
        _type: "block",
        children: [
          {
            _key: "11a",
            _type: "span",
            text: "Did I build anything impressive? No.\nDid I make massive progress? Not really.\nBut did I show up? Yes.\nAnd that's what matters most when you're learning.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "12",
        _type: "block",
        children: [
          {
            _key: "12a",
            _type: "span",
            text: "Why Consistency Beats Intensity",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "13",
        _type: "block",
        children: [
          {
            _key: "13a",
            _type: "span",
            text: "I used to think I needed to dedicate 4-5 hours every day to \"really\" learn coding. But that's unrealistic when you're balancing life, school, work, or just being human.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "14",
        _type: "block",
        children: [
          {
            _key: "14a",
            _type: "span",
            text: "What actually works? Showing up consistently, even if it's just for 20 minutes.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "15",
        _type: "block",
        children: [
          {
            _key: "15a",
            _type: "span",
            text: "Here's what \"showing up\" looks like on my low-energy days:\n\nReading documentation instead of writing code\nOrganizing my project files\nWriting comments to clarify what my code does\nSketching out ideas for future projects\nDebugging one small issue\nEven just opening my code editor and reviewing yesterday's work",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "16",
        _type: "block",
        children: [
          {
            _key: "16a",
            _type: "span",
            text: "These aren't wasted days. They're maintenance days. The kind that keep the momentum going even when inspiration is missing.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "17",
        _type: "block",
        children: [
          {
            _key: "17a",
            _type: "span",
            text: "The Days I Actually Build",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "18",
        _type: "block",
        children: [
          {
            _key: "18a",
            _type: "span",
            text: "Then there are the good days—the ones where everything flows.\nI'll solve a problem that's been bugging me for days. Or I'll successfully implement a feature I thought was beyond my skill level. Or I'll finally understand why async/await works the way it does.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "19",
        _type: "block",
        children: [
          {
            _key: "19a",
            _type: "span",
            text: "Those days feel amazing. Like I'm actually making progress and becoming the developer I want to be.\nBut here's the thing: those productive days only happen because I showed up on the hard days too.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "20",
        _type: "block",
        children: [
          {
            _key: "20a",
            _type: "span",
            text: "If I only coded when I \"felt like it,\" I'd code maybe once a week. Progress would be painfully slow, and I'd probably quit out of frustration.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "21",
        _type: "block",
        children: [
          {
            _key: "21a",
            _type: "span",
            text: "What I've Learned About Motivation",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "22",
        _type: "block",
        children: [
          {
            _key: "22a",
            _type: "span",
            text: "Motivation is overrated. Seriously.\nWaiting to feel motivated is like waiting for perfect weather to go for a run. Some days it'll happen, but most days it won't.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "23",
        _type: "block",
        children: [
          {
            _key: "23a",
            _type: "span",
            text: "What works better is discipline disguised as low stakes.\nInstead of telling myself \"I need to code for 2 hours today,\" I say:\n\n\"I'll just open the project and see what happens\"\n\"I'll write one function, that's it\"\n\"I'll fix this one thing that's been annoying me\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "24",
        _type: "block",
        children: [
          {
            _key: "24a",
            _type: "span",
            text: "Nine times out of ten, once I start, I keep going. But even if I don't, I've still done something. I've still shown up.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "25",
        _type: "block",
        children: [
          {
            _key: "25a",
            _type: "span",
            text: "The Comparison Trap",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "26",
        _type: "block",
        children: [
          {
            _key: "26a",
            _type: "span",
            text: "Social media makes it worse. Everyone's posting their wins—new projects launched, job offers received, complex algorithms solved.\nWhat they're not posting:\n\nThe days they struggled with basic syntax\nThe tutorial hell they got stuck in for weeks\nThe times they felt like giving up\nThe bugs that took 3 hours to fix because of a missing semicolon",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "27",
        _type: "block",
        children: [
          {
            _key: "27a",
            _type: "span",
            text: "Everyone has those days. You're just not seeing them.\nI've started reminding myself: I'm not competing with anyone else's highlight reel. I'm competing with who I was yesterday. And some days, \"who I was yesterday\" is the version of me who didn't even open the code editor.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "28",
        _type: "block",
        children: [
          {
            _key: "28a",
            _type: "span",
            text: "Progress Isn't Always Visible",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "29",
        _type: "block",
        children: [
          {
            _key: "29a",
            _type: "span",
            text: "Here's something I wish I'd understood earlier: learning compounds in invisible ways.\nThe day I spent just reading documentation? That made the next coding session easier.\nThe day I only watched tutorials? That gave me ideas for my next project.\nThe day I barely wrote any code but organized my files? That saved me time later when I needed to find something quickly.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "30",
        _type: "block",
        children: [
          {
            _key: "30a",
            _type: "span",
            text: "Not every day needs a visible output. Sometimes the most important progress happens in your brain, not your GitHub contributions graph.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "31",
        _type: "block",
        children: [
          {
            _key: "31a",
            _type: "span",
            text: "My New Approach",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "32",
        _type: "block",
        children: [
          {
            _key: "32a",
            _type: "span",
            text: "I've stopped measuring my progress by how much I build and started measuring it by how consistently I show up.\nMy new rules:\n\nDo something tech-related every day—no matter how small\nCelebrate the low-effort days just as much as the productive ones\nStop comparing my Chapter 3 to someone else's Chapter 20\nRemember: showing up is 80% of the battle",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "33",
        _type: "block",
        children: [
          {
            _key: "33a",
            _type: "span",
            text: "Some days I'll build. Some days I'll just review notes. Some days I'll watch a video or read an article. But every single day, I'll show up in some way.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "34",
        _type: "block",
        children: [
          {
            _key: "34a",
            _type: "span",
            text: "Why This Matters for You",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "35",
        _type: "block",
        children: [
          {
            _key: "35a",
            _type: "span",
            text: "If you're also learning to code, web development, data science, or anything in tech—give yourself permission to have \"just show up\" days.\nYou don't need to be a productivity machine. You don't need to build something new every single day. You don't need to match the pace of the people you see online.\nYou just need to keep showing up.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "36",
        _type: "block",
        children: [
          {
            _key: "36a",
            _type: "span",
            text: "Because the person who codes for 20 minutes every day will go further than the person who codes for 8 hours once a month and then burns out.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "37",
        _type: "block",
        children: [
          {
            _key: "37a",
            _type: "span",
            text: "What's Next for Me?",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "38",
        _type: "block",
        children: [
          {
            _key: "38a",
            _type: "span",
            text: "I'm embracing the messy, inconsistent, very human process of learning tech.\nSome days I'll push myself. Some days I'll coast. Some days I'll build something I'm proud of. Some days I'll just read documentation and call it a win.\nAnd all of those days will add up to progress.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "39",
        _type: "block",
        children: [
          {
            _key: "39a",
            _type: "span",
            text: "If you're on this journey too, remember: you don't need to be perfect. You don't need to be fast. You just need to keep going.\nSee you tomorrow—whether I'm building something new or just reviewing old code.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "40",
        _type: "block",
        children: [
          {
            _key: "40a",
            _type: "span",
            text: "Documenting my real, unfiltered journey in tech. Some days are wins. Some days are just about not quitting. Both count.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      }
    ],
    isPublished: true,
    featured: true,
  },
  {
    _id: "local-4",
    _createdAt: "2026-02-02T10:00:00Z",
    title: "Why I Treat My Portfolio Like a Startup",
    slug: "portfolio-as-a-startup",
    description: "When I started learning web development, I thought my portfolio was just a website where I'd dump my projects. A digital resume. Something I'd build once and forget about. I was completely wrong.",
    coverImage: {
      image: "/blog/b4.jpg",
      alt: "Portfolio Startup Mindset",
      lqip: "",
    },
    tags: ["Career", "Mindset", "Portfolio"],
    author: {
      name: "Kunj Nakrani",
      photo: {
        image: "/about-profile.jpg",
        alt: "Kunj Nakrani",
      },
      twitterUrl: "https://twitter.com/kunjnakrani",
    },
    body: [
      {
        _key: "1",
        _type: "block",
        children: [
          {
            _key: "1a",
            _type: "span",
            text: "When I started learning web development, I thought my portfolio was just a website where I'd dump my projects. A digital resume. Something I'd build once and forget about. I was completely wrong.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "2",
        _type: "block",
        children: [
          {
            _key: "2a",
            _type: "span",
            text: "The moment I shifted my mindset and started treating my portfolio like a startup, everything changed. Not just the website itself, but how I approached learning, building projects, and presenting myself to the world.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "3",
        _type: "block",
        children: [
          {
            _key: "3a",
            _type: "span",
            text: "The Mindset Shift",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "4",
        _type: "block",
        children: [
          {
            _key: "4a",
            _type: "span",
            text: "Here's what clicked for me: A startup isn't just a product—it's a story, a brand, and a value proposition.\nYour portfolio is the same thing.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "5",
        _type: "block",
        children: [
          {
            _key: "5a",
            _type: "span",
            text: "It's not just about showing what you've built. It's about showing:\n\nWho you are as a developer\nWhat problems you can solve\nWhy someone should care about your work\nWhere you're heading in your tech journey",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "6",
        _type: "block",
        children: [
          {
            _key: "6a",
            _type: "span",
            text: "Once I started thinking this way, I stopped seeing my portfolio as a chore and started seeing it as my first real product.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "7",
        _type: "block",
        children: [
          {
            _key: "7a",
            _type: "span",
            text: "Defining My \"Target Audience\"",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "8",
        _type: "block",
        children: [
          {
            _key: "8a",
            _type: "span",
            text: "Startups obsess over their users. So I asked myself: who is my portfolio really for?\nMy answer:\n\nRecruiters scanning quickly for skills and potential\nHiring managers looking for problem-solving ability\nFellow learners who might connect or collaborate\nFuture me who needs to remember what I've learned",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "9",
        _type: "block",
        children: [
          {
            _key: "9a",
            _type: "span",
            text: "Each of these \"users\" has different needs. A recruiter wants to see skills and results fast. A fellow learner wants to see the journey and process. Future me wants documentation and clarity.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "10",
        _type: "block",
        children: [
          {
            _key: "10a",
            _type: "span",
            text: "So I designed my portfolio to serve all of them—clear navigation, project breakdowns with context, and a blog that shows my learning process.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "11",
        _type: "block",
        children: [
          {
            _key: "11a",
            _type: "span",
            text: "Building an MVP (Minimum Viable Portfolio)",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "12",
        _type: "block",
        children: [
          {
            _key: "12a",
            _type: "span",
            text: "Startups don't launch perfect products. They launch MVPs—Minimum Viable Products—and improve based on feedback.\nI did the same with my portfolio.\nVersion 1.0 was simple:\n\nClean homepage with a short intro\n2-3 projects with descriptions\nLinks to GitHub and LinkedIn\nBasic responsive design",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "13",
        _type: "block",
        children: [
          {
            _key: "13a",
            _type: "span",
            text: "Was it perfect? No.\nWas it better than nothing? Absolutely.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "14",
        _type: "block",
        children: [
          {
            _key: "14a",
            _type: "span",
            text: "I published it, shared it with a few people, got feedback, and iterated. Version 2.0 added a blog. Version 3.0 improved the project cards. Version 4.0 added better mobile responsiveness.\nThe key lesson: Don't wait for perfection. Ship something, learn from it, and improve.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "15",
        _type: "block",
        children: [
          {
            _key: "15a",
            _type: "span",
            text: "Treating Projects Like Product Launches",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "16",
        _type: "block",
        children: [
          {
            _key: "16a",
            _type: "span",
            text: "Startups don't just build features—they think about why those features matter to users.\nI started doing the same with my projects.\nBefore (lazy approach):\n\nBuild a random to-do app\nThrow it on GitHub\nAdd it to portfolio with the description: \"A to-do app built with JavaScript\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "17",
        _type: "block",
        children: [
          {
            _key: "17a",
            _type: "span",
            text: "After (startup approach):\n\nIdentify a real problem: \"I kept forgetting daily tasks and needed a simple tracker\"\nBuild with intention: Focus on clean UI and localStorage persistence\nDocument the process: What I learned, what challenges I faced\nPresent the value: \"A lightweight task manager that works offline and respects user privacy\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "18",
        _type: "block",
        children: [
          {
            _key: "18a",
            _type: "span",
            text: "See the difference? One is just a project. The other is a product with purpose.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "19",
        _type: "block",
        children: [
          {
            _key: "19a",
            _type: "span",
            text: "Iterating Based on \"Customer Feedback\"",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "20",
        _type: "block",
        children: [
          {
            _key: "20a",
            _type: "span",
            text: "Startups constantly gather user feedback. I do the same with my portfolio.\nI've asked:\n\nFriends learning to code: \"Does this make sense to you?\"\nDevelopers I met online: \"What would you improve?\"\nCareer advisors: \"Would you hire someone with this portfolio?\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "21",
        _type: "block",
        children: [
          {
            _key: "21a",
            _type: "span",
            text: "The feedback I got changed everything:\n\n\"Your projects look nice, but I can't tell what you actually built vs. what's from a tutorial\" → I added a \"My Contribution\" section\n\"The homepage loads too slowly\" → I optimized images and removed unnecessary animations\n\"I want to see your code\" → I added prominent GitHub links with README files",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "22",
        _type: "block",
        children: [
          {
            _key: "22a",
            _type: "span",
            text: "Every piece of feedback is a chance to improve the \"product.\"",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "23",
        _type: "block",
        children: [
          {
            _key: "23a",
            _type: "span",
            text: "Marketing Myself (Without Being Cringe)",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "24",
        _type: "block",
        children: [
          {
            _key: "24a",
            _type: "span",
            text: "Startups need to get their product in front of people. So do I.\nBut I'm not spamming LinkedIn with \"Hire me!\" posts. Instead, I'm:\n\nWriting honest blog posts about what I'm learning\nSharing small wins and challenges on social platforms\nContributing to beginner-friendly discussions online\nBuilding in public and documenting my journey",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "25",
        _type: "block",
        children: [
          {
            _key: "25a",
            _type: "span",
            text: "The goal isn't to brag. It's to build visibility and credibility.\nWhen someone searches for me, I want them to find:\n\nMy portfolio (the product)\nMy blog posts (the story)\nMy GitHub (the proof)\nMy journey (the authenticity)",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "26",
        _type: "block",
        children: [
          {
            _key: "26a",
            _type: "span",
            text: "This is exactly what startups do with content marketing—except I'm the product.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "27",
        _type: "block",
        children: [
          {
            _key: "27a",
            _type: "span",
            text: "Measuring Success (My Portfolio Metrics)",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "28",
        _type: "block",
        children: [
          {
            _key: "28a",
            _type: "span",
            text: "Startups track metrics. I track mine too, but in a beginner-friendly way:\nQualitative Metrics:\n\nDid I get feedback from someone in the industry?\nDid a project make me understand a concept better?\nAm I proud to share this with others?",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "29",
        _type: "block",
        children: [
          {
            _key: "29a",
            _type: "span",
            text: "Quantitative Metrics (when applicable):\n\nHow many people visited my portfolio?\nHow many GitHub stars or forks did my projects get?\nDid anyone reach out after seeing my work?",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "30",
        _type: "block",
        children: [
          {
            _key: "30a",
            _type: "span",
            text: "I'm not obsessing over numbers, but I am paying attention. If a project gets zero engagement, maybe it's not presented well. If a blog post gets shared, maybe I should write more like that.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "31",
        _type: "block",
        children: [
          {
            _key: "31a",
            _type: "span",
            text: "Pivoting When Needed",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "32",
        _type: "block",
        children: [
          {
            _key: "32a",
            _type: "span",
            text: "Startups pivot when something isn't working. So do I.\nExample: I initially focused my portfolio on front-end projects because I thought that's what I should do. But after exploring data science and AI, I realized I'm more excited about the intersection of web dev and intelligent systems.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "33",
        _type: "block",
        children: [
          {
            _key: "33a",
            _type: "span",
            text: "So I pivoted. I restructured my portfolio to reflect Full-Stack + AI exploration. I kept my front-end work but added projects and blogs about data analysis and machine learning basics.\nThe lesson: Your portfolio isn't set in stone. It should evolve as you do.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "34",
        _type: "block",
        children: [
          {
            _key: "34a",
            _type: "span",
            text: "Building for the Long Term",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "35",
        _type: "block",
        children: [
          {
            _key: "35a",
            _type: "span",
            text: "Startups think about scalability. I think about my portfolio the same way.\nI'm not just building for today's job applications. I'm building:\n\nA knowledge base for future me\nA public record of my growth\nA platform I can expand as I learn more\nSomething that can evolve into a personal brand",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "36",
        _type: "block",
        children: [
          {
            _key: "36a",
            _type: "span",
            text: "Five years from now, I want to look back at this portfolio and see the foundation of something bigger—maybe a tech blog with real readership, maybe a library of useful open-source projects, maybe a consulting business.\nI'm not just building a portfolio. I'm building a launchpad.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "37",
        _type: "block",
        children: [
          {
            _key: "37a",
            _type: "span",
            text: "What This Approach Has Taught Me",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "38",
        _type: "block",
        children: [
          {
            _key: "38a",
            _type: "span",
            text: "Treating my portfolio like a startup has made me:\n\nMore intentional about what I build and why\nMore disciplined about documenting and presenting my work\nMore confident in sharing my journey publicly\nMore realistic about iteration and improvement",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "39",
        _type: "block",
        children: [
          {
            _key: "39a",
            _type: "span",
            text: "I'm not waiting to be \"good enough\" anymore. I'm shipping, learning, and iterating—just like any startup would.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "40",
        _type: "block",
        children: [
          {
            _key: "40a",
            _type: "span",
            text: "My Advice If You're Building a Portfolio",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "41",
        _type: "block",
        children: [
          {
            _key: "41a",
            _type: "span",
            text: "Don't overthink it. But also, don't undervalue it.\nThink like a startup founder:\n\nShip an MVP—don't wait for perfection\nKnow your audience—who's this portfolio for?\nTell a story—why do your projects matter?\nGather feedback—and actually use it\nIterate constantly—your portfolio is never \"done\"\nMarket yourself—share your work without being obnoxious\nBuild for the long term—this is more than a one-time assignment",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "42",
        _type: "block",
        children: [
          {
            _key: "42a",
            _type: "span",
            text: "Your portfolio is your first product. Treat it that way.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "43",
        _type: "block",
        children: [
          {
            _key: "43a",
            _type: "span",
            text: "What's Next for Me?",
            marks: ["strong"],
          },
        ],
        markDefs: [],
        style: "h3",
      },
      {
        _key: "44",
        _type: "block",
        children: [
          {
            _key: "44a",
            _type: "span",
            text: "I'm continuing to refine my portfolio as I learn. Next steps:\n\nAdd case studies for my top 3 projects\nImprove load speed and accessibility\nWrite more technical blogs to show deeper understanding\nExperiment with adding interactive demos",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      },
      {
        _key: "45",
        _type: "block",
        children: [
          {
            _key: "45a",
            _type: "span",
            text: "My portfolio is a living document of my tech journey. And just like a startup, it'll keep evolving as I grow.\nIf you're building yours too, remember: you're not just creating a website. You're launching a product. Your product. Make it count.\n\nBuilding in public and learning as I go. My portfolio is my startup, and I'm the founder, developer, and user all at once. Follow the journey.",
            marks: [],
          },
        ],
        markDefs: [],
        style: "normal",
      }
    ],
    isPublished: true,
    featured: true,
  }
];
