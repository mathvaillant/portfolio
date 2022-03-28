import React from 'react';
import './Skills.scss';
import HTML from '../../assets/images/html.png';
import CSS from '../../assets/images/css.png';
import JS from '../../assets/images/js.png';
import SASS from '../../assets/images/sass.png';
import REACT from '../../assets/images/react_logo.png';
import REDUX from '../../assets/images/redux.png';
import FIREBASE from '../../assets/images/firebase.png';
import NODE from '../../assets/images/node.png';
import GITHUB from '../../assets/images/github.png';

const Skills = () => {
  return (
    <div className={'Skills'}>
        <h2>Skills</h2>

        <div>
            <img src={HTML} alt="" />
            <img src={CSS} alt="" />
            <img src={SASS} alt="" />
            <img src={JS} alt="" />
            <img src={REACT} alt="" />
            <img src={REDUX} alt="" />
            <img src={FIREBASE} alt="" />
            <img src={GITHUB} alt="" />
            <img src={NODE} alt="" />
        </div>
    </div>
  )
}

export default Skills