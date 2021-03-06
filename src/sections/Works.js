import React from 'react';
import WorkCard from '../components/WorkCard';
import todoPrint from '../images/todo-print.png';
import wallet from '../images/Wallet.png';
import recipesApi from '../images/recipesApi.png';

const worksObject = [
  {
    name: 'To Do List',
    link: 'https://todo-dionysio-client.herokuapp.com/',
    image: todoPrint
  },
  {
    name: 'Recipes API',
    link: 'https://github.com/vdionysio/recipes-api',
    image: recipesApi
  },
  {
    name: 'Wallet',
    link: 'https://front-end-wallet.vercel.app/',
    image: wallet
  }
];

export default function Works() {
  return (
    <div id="works" className="section">
      <div className="works-container">
        <h2 className="font-600">Works</h2>
        <ul className="works-list">
          {worksObject.map((item) => (
            <WorkCard key={item.text} item={item} className="work-div" />
          ))}
        </ul>
      </div>
    </div>
  );
}
