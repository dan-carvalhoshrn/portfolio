import React from 'react'

import ProjectCard from './ProjectCard'

const projectsData = [
    {
        id: 1,
        title: "Spiderman-app",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquaum, voluptatum.",
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

function ProjectsSection() {
    return (
        <>
            <h2 className='text-center text-4xl font-bold text-white my-4'>
                My Projects
            </h2>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>

    )
}

export default ProjectsSection