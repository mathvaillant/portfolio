import React from 'react';
import {Carousel} from '3d-react-carousal';
import OPEN from '../../assets/images/open.png';
import GITHUBICON from '../../assets/images/githubicon.png';
import STORE from '../../assets/gifs/ordeno.gif';
import INFO from '../../assets/gifs/coronainfo.gif';
import NASA from '../../assets/gifs/nasa.gif';
import BUGHASH from '../../assets/images/bughash.png';
import './Projects.scss';

const Projects = () => {
  const projects = [
    {
      title: 'Bughash',
      paragrah: 'Bug tracker app with support for description, image uploading and time tracking.',
      span: 'Built with React, TypeScript, Express, MongoDB, Mongoose and Firebase Storage.',
      gifSrc: BUGHASH,
      live: 'https://bughash-app.web.app/',
      code: 'https://github.com/mathvaillant/bughash',
    },
    {
      title: 'Coronainfo',
      paragrah: 'Covid-19 tracker with the latest live data. ',
      span: 'Built with ReactJs using the Disease.sh API.',
      gifSrc: INFO,
      live: 'https://covid19-worldwide-livetracker.web.app/',
      code: 'https://github.com/mathvaillant/coronainfo',
    },
    {
      title: 'Nasa Now',
      paragrah: 'Nasa media App. I am a big fan of Astronomy.',
      span: 'Built with React Js using Nasa\'s API for pictures and the APOD API.',
      gifSrc: NASA,
      live: 'https://nasanowapp.web.app/start',
      code: 'https://github.com/mathvaillant/Nasa-Today-App',
    },
    {
      title: 'Ordeno Store',
      paragrah: 'Full stack MERN E-commerce application with cart and PayPal functionality.',
      span: 'Built with React, React-Bootstrap, Redux, Sass, NodeJs, ExpressJs, MongoDB and Mongoose',
      gifSrc: STORE,
      live: 'https://ordenostore.herokuapp.com/',
      code: 'https://github.com/mathvaillant/ordeno_store'
    },
  ];

  const projectsDivs = () => {
    return projects.map(({ title, paragrah, span, gifSrc, live, code }) => {
      return (
        <div className="container">
          <div className='container__img'>
            <img src={gifSrc} alt=""/>
          </div>

          <div className='container__text'>
            <h1>{title}</h1>

            <p className='project'>
              {paragrah} <br /> <span>{span}</span>
            </p>

            <div className='container__external'>
              <a href={live} target='_blank' rel="noreferrer"><img src={OPEN} alt="" width={30}/></a>
              <a href={code} target='_blank' rel="noreferrer"><img src={GITHUBICON} alt="" width={30} /></a>
            </div>
          </div>
        </div>
      );
    })
  }

  return (
    <div className="Projects" id="projects">
      <span className="bgCircle"></span>
      <h1>Projects</h1>

      <Carousel 
        slides={projectsDivs()} 
        autoplay={true} 
        interval={1000000} 
      />
    </div>
  )
}

export default Projects