import React from 'react';
import './Footer.scss';
import LINKEDIN from '../../assets/images/linkedin.png';
import GITHUBICON from '../../assets/images/githubicon.png';
import LOGO from '../../assets/images/logoImg.jpeg';

const Footer = () => {
  return (
    <div className='Footer' id="contact">
      <img src={LOGO} alt="" />
      <h1>Get in contact using any of the options below 👋 </h1>
      <hr />
        <div>
          <a className='contact' href="mailto:matheusvaillant505@gmail.com" target="_blank" rel='noreferrer'>
            <i class="fa fa-at"></i>
            matheusvaillant505@gmail.com
          </a>
          <a className='contact' href="tel:920508532">
            <i class="fa fa-phone"></i>
            +351 920 508 532
          </a>
        </div>
        <div>
          <a href='https://github.com/mathvaillant' target='_blank' rel="noreferrer"><img src={GITHUBICON} alt=""/></a>
          <a href='https://www.linkedin.com/in/matheus-vaillant-03781b11b/' target='_blank' rel="noreferrer"><img src={LINKEDIN} alt=""/></a>
        </div>
    </div>
  )
}

export default Footer