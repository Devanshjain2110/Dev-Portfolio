'use client'
import React from 'react'
import SectionHeading from './sectionheading'
import {
    VerticalTimeline,
    VerticalTimelineElement,
  } from "react-vertical-timeline-component"
  import "react-vertical-timeline-component/style.min.css";
import { certificationsData } from '@/lib/data';
import { useSectionInView } from '../customHooks/useSectionInView';

function Certifications() {

  const {ref} = useSectionInView('Certifications')
  return (
    <section ref={ref} id='certifications'className='scroll-mt-28 mb-28 sm:mb-40' >
      <SectionHeading> My Certifications</SectionHeading>
      <VerticalTimeline lineColor="">
            {
              certificationsData.map((certificate, index) => (
                <React.Fragment  key={index}>
                <VerticalTimelineElement contentStyle={{
                  background : '#f3f4f6',
                  boxShadow: 'none',
                  border : '1px solid rgba(0,0,0,0.05)',
                  textAlign: "left",
                  padding : '1.3rem 2rem'
                }}
                visible={true}
                contentArrowStyle={{
                  borderRight : '7px solid #9ca3af'
                }}
                date={certificate.date}
                icon={certificate.icon}
                iconStyle={{
                  background : 'white',
                  fontSize : '1.5rem',
                }}
                >
                  <h3 className='font-semibold capitalize'>
                    {certificate.title}
                  </h3>
                  <p className='font-normal !mt-0'>
                    {
                      certificate.location
                    }
                  </p>
                  <p className='!mt-1 !font-normal text-gray-700'>{certificate.description}</p>
                </VerticalTimelineElement>
                </React.Fragment>
              ))
            }
      </VerticalTimeline>
    </section>
  )
}

export default Certifications

