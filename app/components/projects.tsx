'use client'
import React from 'react'
import SectionHeading from './sectionheading'
import { projectsData } from '@/lib/data'
import Project from './project'
import { useSectionInView } from '../customHooks/useSectionInView'

function Projects() {
  const {ref} = useSectionInView('Projects',0.5)
  return (
    <section ref={ref} id="projects"  className='scroll-mt-28'>
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
