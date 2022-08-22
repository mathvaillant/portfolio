import React from 'react';
import LogoWhite from '../../assets/images/logo.png';
import LogoDark from '../../assets/images/logoDark.png';
import './Header.scss';

const Header = () => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      setDark(Boolean(!entries.find(entry => entry.isIntersecting)));
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 1.0
    });
    const target = document.querySelector('#hireme');
    observer.observe(target);
  }, []);

  return (
    <nav className={`Header ${dark ? 'dark' : ''}`}>
      <ul>
        <a href="/"><img src={dark ? LogoDark : LogoWhite} alt="" /></a>
        <a href="#showcase">Home</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#experience">Experience</a>
        <a href="#contact">Contact</a>
      </ul>
    </nav>
  )
}

export default Header