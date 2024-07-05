import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  // {
  //   name: "Projects",
  //   hash: "#projects",
  // },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Senior Devops Engineer",
    location: "Mumbai , India",
    description:
      "I have pursued internship in my final semester of my College. Converted as a full time after the completion of Internship.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2022",
  },
  {
    title: "Software Engineer",
    location: "Hyderabad , India",
    description:
      "I worked as a full stack developer with Angular in Frontend and Node JS in backend. Developed a Content Management System as a SaaS based product. ",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Senior Software Engineer",
    location: "Hyderabad , India",
    description:
      "I worked as a senior software developer leading projects in MEAN and MERN stack and developing POCs for the business team and helping team with digital transformation of legacy projects. ",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2022",
  },
  {
    title: "Senior Software Engineer",
    location: "United States",
    description:
      "I am currently working as a senior engineer. My stack includes Angular , React, Next.js, TypeScript, MongoDB. Currently leadng a team of 3 junior developers .I'm open to full-time opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "AWS",
  "Azure",
  "GCP",
  "GitHub",
  "GitLab",
  "BitBucket",
  "AWS CodeCommit",
  "Jenkins",
  "GitLab CI/CD",
  "AWS CodePipeline",
  "Azure DevOps",
  "GitHub Actions",
  "Terraform",
  "Ansible",
  "AWS CloudFormation",
  "ARM Templates",
  "Docker",
  "Kubernetes",
  "OpenShift",
  "Prometheus",
  "Grafana",
  "Splunk",
  "ELK Stack",
  "Python Scripting",
  "Bash/Shell Scripting",
  "Python",
  "SonarQube",
  "Snyk",
  "Jfrog",
  "Nexus",
  "OWASP",
  "ECR",
  "EKS",
  "AKS",
  "AWS Lamba",
  "Azure Functions",
  "Confluence",
  "JIRA",
  "Service Now",
] as const;
