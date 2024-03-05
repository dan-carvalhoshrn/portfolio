"use client"

import React, { useState, useTransition } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Java</li>
        <li>TypeScript</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Computer Science</li>
        <li>Federal Institute of Brasilia, Brazil</li>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className='list-disc pl-2'>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className='text-white'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <div className="relative">
          <Image src="/images/about_image.png" width={600} height={600} alt='pc-illustration' className='pt-2' />
        </div>

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>

          <p className='text-base lg:text-lg text-justify'>
            Hello I&apos;m Daniel, a full-stack developer with a passion for technology.
            My goal is to apply my skills to solve complex problems, focusing on agility,
            competence, and adherence to good practices. My experience covers web applications,
            mobile development, database modeling, and maintenance. I am constantly seeking
            new knowledge. Proficient in Java, JavaScript, TypeScript, React, React Native,
            and MySQL, I am always striving to enhance and expand my technical skills.
            Additionally, I value effective collaboration and clear communication, being
            capable of conveying complex concepts concisely. I am eager for new challenges and
            excited about the future of technology. Feel free to reach out to discuss opportunities
            and projects.
          </p>

          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
              Skills
            </TabButton>

            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
              Education
            </TabButton>

            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
              Certifications
            </TabButton>
          </div>

          <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;