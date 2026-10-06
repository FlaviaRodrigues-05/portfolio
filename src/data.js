// ---------------------------------------------------------------------
// ALL of your personal content lives in this one file.
// Want to change your bio, add a project, or fix a typo? Edit it here -
// you never need to touch the component files to update your info.
// ---------------------------------------------------------------------

export const personalInfo = {
  name: "Flavia Rodrigues",
  title: "Computer Science Student",
  location: "Malad, Mumbai",
  email: "flaviavinrodrigues@gmail.com",
  phone: "9619088917",
  linkedin: "https://www.linkedin.com/in/flavia-rodrigues-301218301",
  github: "https://github.com/FlaviaRodrigues-05",
  resume: "/Flavia_Rodrigues_CV.pdf",
  // words the hero types out one after another
  roles: [
    "Computer Science Student",
    "Web Developer",
    "UI Designer",
    "Flutter Developer",
  ],
  summary:
    "Hi, I'm a third-year Computer Science student with a strong interest in programming, software development, and web design. I enjoy solving problems, building creative solutions, and continuously learning to improve my skills. I like combining creativity with technical knowledge to create meaningful digital experiences, and I'm always open to learning and growing in the tech field.",
  about:
    "I enjoy building projects and I'm always excited to explore new tools and technologies that help bring ideas to life. When I'm not coding, you'll probably find me reading, exploring cozy cafés, capturing moments through travelling, or experimenting with UI design and creative ideas. I enjoy finding inspiration in everyday experiences and bringing that creativity into my work. Whether I'm learning a new framework or working on a personal project, I'm always excited to keep growing as a developer and designer."
  
};

export const education = [
  {
    id: "edu-1",
    stage: "Undergraduate",
    course: "Bachelor of Science (B.Sc) - Computer Science",
    school: "Mithibai College",
    period: "2024 - 2027 (expected)",
    detail: "",
  },
  {
    id: "edu-2",
    stage: "Junior College",
    course: "HSC - Science",
    school: "The BSGD's Junior College",
    period: "2022 - 2024",
    detail: "HSC Score: 73.67%",
  },
  {
    id: "edu-3",
    stage: "Secondary School",
    course: "SSC",
    school: "Carmel Of St. Joseph School",
    period: "2021 - 2022",
    detail: "SSC Score: 87.83%",
  },
];

export const experience = [
  {
    id: "exp-2",
    role: "Website Team Member",
    org: "Mithibai Cultural Committee",
    year: "2026",
    points: [
      "Designer and developer for the committee's website - creating visual designs and building the site for cultural events and activities.",
    ],
  },
  {
    id: "exp-1",
    role: "Committee Member",
    org: "TechSpark - College Fest",
    year: "2025",
    points: [
      "Member of the events department - organized and hosted events, coordinated logistics and supported smooth execution.",
    ],
  },
];

// Grouped the same way as the CV. Each group becomes one card.
export const skillGroups = [
  { title: "Programming Languages", color: "pink", items: ["C", "C#", "Java", "Python"] },
  { title: "Web", color: "cyan", items: ["JavaScript", "HTML", "CSS"] },
  { title: "App & Backend", color: "green", items: ["Flutter", "Firebase"] },
  { title: "Design & Tools", color: "pink", items: ["Figma", "Git", "GitHub"] },
];

export const technicalSkills = [
  "Debugging & Problem Solving",
  "Logical Thinking",
  "Critical Thinking",
];

export const softSkills = [
  "Communication",
  "Creative Expression",
  "Organizational Skills",
  "Decision Making",
];

export const spokenLanguages = ["English", "Hindi", "Marathi"];

export const interests = ["Travelling", "Books"];

export const projects = [
  {
    id: "proj-3",
    title: "SignFrame",
    tagline: "Sign Language Learning Platform",
    status: "NEW",
    description:
      "A web platform for learning sign language and translating text into sign language, through an interactive and accessible interface.",
    tech: ["React", "Vite", "React Router", "Firebase", "MediaPipe"],
    // no live site yet - the VISIT button is hidden when liveUrl is empty
    liveUrl: "",
    codeUrl: "https://github.com/FlaviaRodrigues-05/signframe",
  },
  {
    id: "proj-2",
    title: "Unite",
    tagline: "Club / Committee Management App",
    status: "COMPLETE",
    description:
      "A mobile app concept for managing college clubs and committees - members, events and updates in one place.",
    tech: ["Flutter", "Firebase Auth", "Cloud Firestore", "Figma"],
    liveUrl: "",
    codeUrl: "https://github.com/FlaviaRodrigues-05/Unite",
  },
  {
    id: "proj-1",
    title: "Find My Brew",
    tagline: "Cafe Finder Website",
    status: "COMPLETE",
    description:
      "A website that helps people discover nearby cafes, built to practice core front-end fundamentals without any frameworks.",
    tech: ["Vanilla JavaScript", "HTML", "CSS"],
    liveUrl: "https://flaviarodrigues-05.github.io/Find-My-Brew/",
    codeUrl: "https://github.com/FlaviaRodrigues-05/Find-My-Brew",
  },
];
