import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Badge from "react-bootstrap/Badge";
import './Experience.scss';
import REACT from '../../assets/images/react_logo.png';

const experience = [
  {
    "company": "Planless.io",
    "title": "FrontEnd Enginner",
    "years": "06.2021 - present",
    "mainTech": [
      "React, Redux, NodeJS & Google Cloud Platform",
    ],
    "technologies": [
      "React",
      "Redux",
      "JavaScript",
      "TypeScript",
      "Material UI",
      "Google Cloud Platform",
      "NodeJS",
      "MongoDB"
    ]
  },
  {
    "company": "Freelancer",
    "title": "Web Developer",
    "years": "07.2018 - 12.2019",
    "mainTech": [
      "React && Redux"
    ],
    "technologies": [
      "React",
      "Redux",
      "Firebase",
      "Node",
      "Express"
    ]
  }
]

export const Experience = () => {
  return (
    <section className='Experience'>
      <div >
        <VerticalTimeline>
          {experience.map((work, index) => {
              const technologies = work.technologies;
              const mainTechnologies = work.mainTech;

              return (
                  <VerticalTimelineElement
                      date={work.years}
                      iconStyle={{
                          background: "black",
                          textAlign: "center",
                      }}
                      icon={<img width='35px' height='auto' src={REACT} alt="" />}
                      key={index}
                  >
                      <div style={{ textAlign: "left", marginBottom: "4px" }}>
                          {mainTechnologies.map((technology, index) => {
                              return (
                                  <Badge pill key={index}>
                                  {technology}
                                  </Badge>
                              );
                          })}
                      </div>

                      <h2 className="vertical-timeline-element-title" style={{ textAlign: "left" }}>{work.title}</h2>

                      <h4 className="vertical-timeline-element-subtitle" style={{ textAlign: "left" }}>{work.company}</h4>

                      <div style={{ textAlign: "left", marginTop: "15px" }} className='tech'>
                          {technologies.map((technology, index) => {
                              return (
                                  <Badge pill key={index}>
                                  {technology}
                                  </Badge>
                              );
                          })}
                      </div>
                  </VerticalTimelineElement>
              );
          })}
          <VerticalTimelineElement
            iconStyle={{
              background: "black",
              textAlign: "center",
            }}
            icon={
              <i></i>
            }
          />
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;