import React from 'react'
import ScrollReveal from "scrollreveal";
import Me from '../../assets/me.png';
import './Profile.scss';

const Profile = () => {
  const [hidden, setHidden] = React.useState(true);

  React.useEffect(() => {
    const triangle1Slide = {
      distance: '10%',
      origin: 'bottom',
      opacity: null,
    }

    const triangle2Slide = {
      distance: '15%',
      origin: 'top',
      opacity: null,
    }

    ScrollReveal().reveal('.triangle1', triangle1Slide);
    ScrollReveal().reveal('.triangle2', triangle2Slide);
  }, []);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      const isHidden = Boolean(entries[0].isIntersecting) || Boolean(entries[0].boundingClientRect.top < 1)
      setHidden(isHidden);
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });
    const target = document.querySelector('.Projects');
    observer.observe(target);
  }, []);

  return (
    <div className={`Profile ${hidden ? 'hidden' : 'visible'}`}>
      <div className="Profile__inner">
        <span className='triangle1'>
        <span className='triangle1__inner'></span>
        </span>
        <span className='triangle2'>
        <span className='triangle2__inner'></span>
        </span>
        <img src={Me} alt="" width={290}/>
      </div>
    </div>
  )
}

export default Profile