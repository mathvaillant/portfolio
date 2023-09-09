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
import DOCKER from '../../assets/images/docker.png';
import BASH from '../../assets/images/bash.png';
import PYTHON from '../../assets/images/python.png';
import GO from '../../assets/images/golang.png';

const Skills = () => {
	return (
		<div className={'Skills'} id='skills'>
			<div className='Skills__left'>
				<span className='bgCircle'></span>
				<h1>
					Some of my skills <br /> & power up's
				</h1>

				<div>
					<img
						data-tip='Bash'
						src={BASH}
						alt=''
						width={47.6}
						height={47.6}
					/>
					<img
						data-tip='Python'
						src={PYTHON}
						alt=''
						width={47.6}
						height={47.6}
					/>
					<img
						data-tip='Docker'
						src={DOCKER}
						alt=''
						width={47.6}
						height={47.6}
					/>
					<img
						data-tip='Go'
						src={GO}
						alt=''
						width={36.6}
						height={47.6}
					/>
					<img
						data-tip='JavaScript'
						src={JS}
						alt=''
						width={47.6}
						height={47.6}
					/>
					<img
						data-tip='TypeScript'
						src={TS}
						alt=''
						width={51}
						height={51}
					/>
					<img
						data-tip='ReactJS & React Native'
						src={REACT}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='Redux'
						src={REDUX}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='Sass'
						src={SASS}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='Firebase'
						src={FIREBASE}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='Github'
						src={GITHUB}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='NodeJS'
						src={NODE}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='ExpressJS'
						src={EXPRES}
						alt=''
						width={49.64}
						height={45.56}
					/>
					<img
						data-tip='MongoDB'
						src={MONGODB}
						alt=''
						width={49.64}
						height={45.56}
					/>
				</div>
			</div>

			<div className='Skills__right'></div>
		</div>
	);
};

export default Skills;
