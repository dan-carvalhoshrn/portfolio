"use client"

import React, { useState, useRef } from 'react'

import ProjectCard from './ProjectCard'

import { motion, useInView } from 'framer-motion'

const projectsData = [
    {
        id: 1,
        title: "Spiderman",
        description: "A promotional page made in HTML, CSS and Vanilla JS for the premiere of Spider-Man No Way Home",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "",
    },
    {
        id: 2,
        title: "Spiderman-app",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "",
    },
    {
        id: 3,
        title: "Spiderman-app",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "",
    },
    {
        id: 4,
        title: "Spiderman-app",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "",
    },
    {
        id: 5,
        title: "Spiderman-app",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "",
    },
    {
        id: 6,
        title: "Spiderman-app",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "",
        previewUrl: "",
    },
]

const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
}

function ProjectsSection() {

    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <section>
            <h2 className='text-center text-4xl font-bold text-white my-4'>
                My Projects
            </h2>
            <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project, index) => (
                    <motion.li
                        key={index}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.3 }}
                    >
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    </motion.li>
                ))}
            </ul>
        </section>

    )
}

export default ProjectsSection