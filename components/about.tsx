"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
      After graduating with a degree in Information Technology in 2015, I started my
  career as a fresher in the IT industry. Over the years, I have had the opportunity to work in multiple domains
  such as telecom, e-commerce, and IT. I have also worked on multiple
  proof-of-concepts (POCs) for my business clients using various tech stacks. I also mentor
  junior DevOps engineers, helping them get up to speed and guiding them with best
  practices in automation, cloud infrastructure, and system reliability. My core stack includes AWS, Azure, Docker, Kubernetes, Jenkins, Terraform, and Ansible.
  I am also familiar with monitoring tools like Prometheus and Grafana, and CI/CD pipelines.
  I am always looking to learn new technologies and improve system reliability and automation processes.
      </p>

      <p>
      When I'm not working, I enjoy playing badminton,Cricket,
  watching movies, and Netflix. I also enjoy learning new things. I am
  currently exploring the stock market and business strategies.
      </p>
    </motion.section>
  );
}
