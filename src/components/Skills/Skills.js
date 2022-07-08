import React from 'react';
import './Skills.scss';
import JS from '../../assets/images/js.png';
import TS from '../../assets/images/ts.png';
import SASS from '../../assets/images/sass.png';
import REACT from '../../assets/images/react_logo.png';
import REDUX from '../../assets/images/redux.png';
import FIREBASE from '../../assets/images/firebase.png';
import NODE from '../../assets/images/node.png';
import GITHUB from '../../assets/images/github.png';
import EXPRES from '../../assets/images/express.png';
import MONGODB from '../../assets/images/mongodb.png';

const Skills = () => {
  return (
    <div className={'Skills'}>
        <h2>Skills</h2>

        <div>
            <img data-tip="JavaScript" src={JS} alt="" />
            <img data-tip="TypeScript" src={TS} alt="" />
            <img data-tip="ReactJS" src={REACT} alt="" />
            <img data-tip="Redux" src={REDUX} alt="" />
            <img data-tip="Sass" src={SASS} alt="" />
            <img data-tip="Firebase" src={FIREBASE} alt="" />
            <img data-tip="Github" src={GITHUB} alt="" />
            <img data-tip="NodeJS" src={NODE} alt="" />
            <img data-tip="ExpressJS" src={EXPRES} alt="" />
            <img data-tip="MongoDB" src={MONGODB} alt="" />
        </div>
    </div>
  )
}

export default Skills