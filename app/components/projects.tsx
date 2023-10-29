import React from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import Project from './project'

function Projects() {
  return (
    <section>
      <SectionHeading >My Projects</SectionHeading>
      <div>
        {
            projectsData.map((project, index) =>{
                return(
                    <React.Fragment key={index}>
                    <Project {...project}/>
                    </React.Fragment>
                )
            })
        }
      </div>
    </section>
  )
}

export default Projects
