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
    <div className={'Skills'} id="skills">
      <div className="Skills__left">
        <span className="bgCircle"></span>
        <h1>Some of my skills <br /> & power up's</h1>

        <div>
          <img data-tip="JavaScript" src={JS} alt="" width={70} height={70}/>
          <img data-tip="TypeScript" src={TS} alt="" width={75} height={75}/>
          <img data-tip="ReactJS" src={REACT} alt="" width={73} height={67}/>
          <img data-tip="Redux" src={REDUX} alt="" width={73} height={67} />
          <img data-tip="Sass" src={SASS} alt="" width={73} height={67}/>
          <img data-tip="Firebase" src={FIREBASE} alt="" width={73} height={67}/>
          <img data-tip="Github" src={GITHUB} alt="" width={73} height={67}/>
          <img data-tip="NodeJS" src={NODE} alt="" width={73} height={67}/>
          <img data-tip="ExpressJS" src={EXPRES} alt="" width={73} height={67}/>
          <img data-tip="MongoDB" src={MONGODB} alt="" width={73} height={67}/>
        </div>
      </div>

      <div className="Skills__right">
      </div>
    </div>
  )
}

export default Skills