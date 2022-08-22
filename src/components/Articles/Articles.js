import React from 'react';
import Article1 from '../../assets/images/article1.png';
import './Articles.scss';

const Articles = () => {
  const articles = [
    {link: 'https://mattvaillant.hashnode.dev/react-usememo-a-beginner-straightforward-and-simple-explanation', image: Article1 }
  ];

  return (
    <div className="Articles" id="articles">
      <span className="bgCircle"></span>
      <h1>Articles</h1>

      <div className="Articles__items">
        {articles.map(({ link, image }) => {
          return <a rel="noreferrer" target='_blank' href={link}><img src={image} alt="" /></a>
        })}
      </div>
    </div>
  )
}

export default Articles