import React from 'react';
import './About.scss';
import Profile from '../../assets/images/profile.jpeg';

const About = () => {
  return (
    <section className="About">
      <h2>About</h2>

        <div>
          <div className="container__inner">
            <div className="container__img">
              <img src={Profile} alt="" />
            </div>

            <div className='container__text'>
              <p>
                Hello! <br />
                I'm Matheus Vaillant, a web developer based in Peniche, Portugal.
                <br />
                <br />
                I enjoy creating things that live on the internet, whether that be
                websites, applications, or anything in between. My goal is to
                always build products that provide pixel-perfect, performant
                experiences.
                <br />
                <br />
                <a className="container__mail" href="mailto:matheusvaillant505@gmail.com"
                  ><small>👉 Send Email 📧</small>
                </a>
                <br />
                {/* <a className="About__mail" href="./resume - cv.pdf" download
                  ><small>👉 Download my CV 📩 </small>
                </a> */}
              </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About