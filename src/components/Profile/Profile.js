import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Me from '../../assets/me.png';
import './Profile.scss';

const Profile = () => {
	const [hidden, setHidden] = React.useState(true);

	React.useEffect(() => {
		const triangle1Slide = {
			distance: '10%',
			origin: 'bottom',
			opacity: null,
		};

		const triangle2Slide = {
			distance: '15%',
			origin: 'top',
			opacity: null,
		};

		ScrollReveal().reveal('.triangle1', triangle1Slide);
		ScrollReveal().reveal('.triangle2', triangle2Slide);
	}, []);

	useEffect(() => {
		const handleScroll = () => {
			const halfPageHeight = window.innerHeight / 0.33;
			const scrollY = window.scrollY || window.pageYOffset;

			setHidden(scrollY >= halfPageHeight);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className={`Profile ${hidden ? 'hidden' : 'visible'}`}>
			<div className='Profile__inner'>
				<span className='triangle1'>
					<span className='triangle1__inner'></span>
				</span>
				<span className='triangle2'>
					<span className='triangle2__inner'></span>
				</span>
				<img src={Me} alt='' width={290} />
			</div>
		</div>
	);
};

export default Profile;
