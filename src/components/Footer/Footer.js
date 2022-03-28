import React from 'react';
import './Footer.scss';
import LINKEDIN from '../../assets/images/linkedin.png';
import GITHUBICON from '../../assets/images/githubicon.png';

const Footer = () => {
  return (
    <div className='Footer'>
        <div>
          <a href='https://github.com/mathvaillant' target='_blank' rel="noreferrer"><img src={GITHUBICON} alt=""/></a>
          <a href='https://www.linkedin.com/in/matheus-vaillant-03781b11b/' target='_blank' rel="noreferrer"><img src={LINKEDIN} alt=""/></a>
        </div>
    </div>
  )
}

export default Footer