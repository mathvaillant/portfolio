import React from 'react';
import './Projects.scss';
import OPEN from '../../assets/images/open.png';
import GITHUBICON from '../../assets/images/githubicon.png';
import STORE from '../../assets/gifs/ordeno.gif';
import INFO from '../../assets/gifs/coronainfo.gif';
import BARBER from '../../assets/gifs/samuelbarber.gif';
import NASA from '../../assets/gifs/nasa.gif';

const Projects = () => {
  const projects = [
    {
      title: 'Coronainfo',
      paragrah: 'Covid-19 tracker with the latest live data. ',
      span: 'Built with ReactJs using the Disease.sh API.',
      gifSrc: INFO,
      live: 'https://covid19-worldwide-livetracker.web.app/',
      code: 'https://github.com/mathvaillant/coronainfo',
    },
    {
      title: 'Samuel Barber',
      paragrah: 'Freelance profesisonal barber. Get in touch with the best barber in Lisbon!',
      span: 'Built with React Js and EmailJs',
      gifSrc: BARBER,
      live: 'https://samuelhomebarber.web.app/',
      code: 'https://github.com/mathvaillant/samuelbarber',
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

  return (
    <section className="Projects">
      <h2>Projects</h2>

        {projects.map(({ title, paragrah, span, gifSrc, live, code }) => {
          return (
            <div>
              <div className='container__inner'>
                <div className='container__img project'>
                  <img src={gifSrc} alt=""/>
                </div>

                <div className='container__text'>
                  <h1>{title}</h1>

                  <p className='project'>
                    {paragrah} <br /> <span>{span}</span>
                  </p>

                  <div className='container__text__external'>
                    <a href={live} target='_blank' rel="noreferrer"><img src={OPEN} alt=""/></a>
                    <a href={code} target='_blank' rel="noreferrer"><img src={GITHUBICON} alt="" /></a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </section>
  )
}

export default Projects