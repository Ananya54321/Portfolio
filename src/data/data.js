import { languages, frameworks, tools } from "../data/Links";
import { codecraftlinks, facultyflowlinks, cobaltlinks } from "../data/Links";

export const skills = [
  {
    title: "Programming Languages",
    skills: languages,
  },
  {
    title: "Frameworks",
    skills: frameworks,
  },
  {
    title: "Tools",
    skills: tools,
  },
];

export const projects = [
  {
    title: "CodeCraft",
    desc: "CodeCraft is a collaborative code editor with room creation functionality, real-time communication, syntax highlighting and line-locking features.",
    tech: codecraftlinks,
    gitlink: "https://github.com/Ananya54321/CodeCraft",
  },
  {
    title: "FacultyFlow",
    desc: "An advanced faculty workload management system, allowing users to find faculty and filter by department and availability and enhanced current workload visualization, improving scheduling efficiency.",
    tech: facultyflowlinks,
    gitlink: "https://github.com/Ananya54321/FacultyFlow",
  },
  {
    title: "Cobalt",
    desc: "An AI-driven web app that improves code analysis and understanding, and has a Code Vault to enhance code management and search efficiency.",
    tech: cobaltlinks,
    gitlink: "https://github.com/Ananya54321/Cobalt",
  },
];

export const achievementslist = [
  {
    title: "Bit-N-Build - Feb 2024",
    desc: "Led a team of 4 and achieved 1st place out of 200+ teams, winning the Hackathon with our project.",
  },
  {
    title: "National-level Ideathon - Mar 2024",
    desc: "Secured 5th place out of 100+ teams with an innovative prototype which acted as a blueprint for enhancing the college transport system.",
  },
  {
    title: "Google CyberSecurity Specialisation",
    desc: "Completed the Google Cybersecurity Professional certificate course.",
  },
];
