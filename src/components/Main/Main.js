import React from 'react';
import Typical from "react-typical";
import Profile from '../../assets/images/profile.png';
import './Main.scss';

const Main = () => {
  const titles = ['Frontend Enginner', 'Web Developer', 'Full-stack Developer', 'UI/UX Designer'].map(x => [ x.toUpperCase(), 1500 ] ).flat();

  const HeaderTitleTypeAnimation = React.memo( () => {
      return <Typical className="title-styles" steps={titles} loop={50} />
  }, [titles]);

  return (
    <div className='Main'>
        <div className='Main__center'>
            <div className='Main__center__profile'>
                <div className='profile__wrapper'>
                    <img src={Profile} alt="" />
                </div>
                <h1>Matheus Vaillant</h1>
                <div>
                  {'</'} <HeaderTitleTypeAnimation /> {'>'}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main