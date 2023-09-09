import React from 'react';
import Typical from 'react-typical';
import ScrollReveal from 'scrollreveal';
import Github from '../../assets/images/github.png';
import CV from '../../assets/cv.pdf';
import Linkedin from '../../assets/images/liinkedin.png';
import './Showcase.scss';

const Showcase = () => {
	React.useEffect(() => {
		const circleSlide = {
			distance: '50%',
			origin: 'top',
			opacity: 0,
			delay: 300,
		};

		ScrollReveal().reveal('.bgCircle', circleSlide);
	}, []);

	return (
		<div className='Showcase' id='showcase'>
			<div className='Showcase__left'>
				<span className='bgCircle'></span>
				<h1>
					Hi, I'm Matheus Vaillant, <br />
					<Typical
						className='title-styles'
						steps={['Software Engineer']}
					/>
				</h1>
				<small>
					Based in Portugal, building full-stack web applications.
					Currently working as a Software Engineer for the coolest
					Portuguese company. 💻 🚀
				</small>
				<a id='hireme' href={CV} download={true}>
					Download CV
				</a>
			</div>

			<div className='Showcase__right'></div>

			<div className='Showcase__bottom'>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://github.com/mathvaillant'
				>
					<img src={Github} alt='' width={30} height={30} />
				</a>
				<a
					rel='noreferrer'
					target='_blank'
					href='https://www.linkedin.com/in/matheus-vaillant-03781b11b/'
				>
					<img src={Linkedin} alt='' width={30} height={30} />
				</a>
			</div>
		</div>
	);
};

export default Showcase;
