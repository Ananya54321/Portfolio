import React from 'react'
import ProjectBox from './ProjectBox'
import { codecraftlinks, facultyflowlinks, cobaltlinks } from "../data/Links";


function Projects() {

  return (
    <div className='lg:m-10'>
        
      <p className="rancho text-2xl md:text-5xl my-10 ml-10"> My Projects: </p>
      <ProjectBox title="CodeCraft" desc="CodeCraft is a collaborative code editor with room creation functionality, real-time communication, syntax highlighting and line-locking features." 
        tech = {codecraftlinks}
        gitlink="https://github.com/Ananya54321/CodeCraft"
        /> 
      <ProjectBox title="FacultyFlow" desc="An advanced faculty workload management system, allowing users to find faculty and filter by department and availability and enhanced current workload visualization, improving in scheduling efficiency."
      tech = {facultyflowlinks} 
      gitlink="https://github.com/Ananya54321/FacultyFlow"
    />
      <ProjectBox title="Cobalt" desc="An AI-driven web app that improves code analysis and understanding, and has a Code Vault to enhance code management and search efficiency."
      tech={ cobaltlinks}
      gitlink="https://github.com/Ananya54321/Cobalt"
      />
    </div>
  )
}

export default Projects
