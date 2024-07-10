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
    location: "Texas, United States",
    description:
      "I am currently working as Senior Cloud Enginner.My Stack incldued AWS/AZURE cloud and also Devops tools and practises.I am currently leading a team of 3 Junior Devops Engineers.I am open to Full time and C2C opportunities.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - Present",
  },
  {
    title: "Analyst - Devops Services",
    location: "Hyderabad , India",
    description:
      "I worked as a Devops Analyst leading projects in AWS/AZURE/OCI cloud. Automated infra on cloud and also involved in migration from on-premises to cloud.",
    icon: React.createElement(CgWorkAlt),
    date: "2024 - 2024",
  },
  {
    title: "Cloud Solution Architect",
    location: "Hyderabad , India",
    description:
      "I worked as a Devops Engineer to lead a team of 60 members for provisioning and set up infrastructure on cloud and access to cloud services. Created CI/CD pipelines form the sratch for devlopment projects and also monitored application after deployemnts.Created deployments for LLM models and created sloutions for low code no code applications.",
    icon: React.createElement(CgWorkAlt),
    date: "2023 - 2023",
  },
  {
    title: "Site Reliability Engineer",
    location: "Hyderabad , India",
    description:
      "I worked as a SRE Engineer to monitor and observe the cloud based applications using monitoring and log analysis tools.Created automation scripts for creating alerts and tickets for the applications.Managed application of Telecom domain and make sure to have high availability and reliability.Tech stack includes Splunk, APP Dynamics, Grafana, Prometheus, PCF.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "Devops Engineer",
    location: "Hyderabad , India",
    description:
      "I worked as a Devops Engineer creating CI/CD pipelines for SaaS based applications. Implemented Devops practises on legacy applications to move applications from on premises to cloud.Developed POCs for the business team and helping team with digital transformation of legacy projects.",
    icon: React.createElement(CgWorkAlt),
    date: "2018 - 2019",
  },
  {
    title: "Devops Engineer",
    location: "Hyderabad , India",
    description:
      "As a fresher, I was introduced to Cloud and DevOps.Gained hands-on experience in deploying and managing applications on cloud platforms such as AWS.Developed foundational skills in Linux system administration, including scripting, user management, and network configuration.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
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
