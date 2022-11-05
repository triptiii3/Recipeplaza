import React from 'react';

export default function recipetile({recipe}){
  return (
    <div className='recipetile'>
        <img src={recipe["recipe"]["image"]}/>
        <p>{recipe["recipe"]["label"]}</p>
    </div>
  );
}
