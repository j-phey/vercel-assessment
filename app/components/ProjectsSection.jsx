import React from 'react'
import ProjectCard from './ProjectCard'

const projectsData =[
    {
        id: 1,
        title: "Title 1",
        description: "Project 1 Description",
        image: "/images/projects/1.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Title 2",
        description: "Project 2 Description",
        image: "/images/projects/2.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Title 3",
        description: "Project 3 Description",
        image: "/images/projects/3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "Title 4",
        description: "Project 4 Description",
        image: "/images/projects/4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Title 5",
        description: "Project 1 Description",
        image: "/images/projects/5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 6,
        title: "Title 6",
        description: "Project 6 Description",
        image: "/images/projects/6.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    }
]

const ProjectsSection = () => {
  return (
    <>
    <h2 className='text-4xl font-bold text-white mb-4'>My Projects</h2>
    <div>
        {projectsData.map((project) => (
            <ProjectCard 
            key={project.id}  
            title={project.title} 
            description={project.description} 
            imgUrl={project.image}
            tags={project} 
            gitUrl={project.gitUrl}
            previewUrl={project.previewUrl}
            />
            ))}
    </div>
    </>
  )
}

export default ProjectsSection