
import './App.css';

import Axios from 'axios';
import { useState } from 'react';

function App() {
  
  const[query, setquery]=useState("");
  const [recipes, setrecipes]=useState([])
  const[healthlabel, sethealthlabel] = useState("vegan");

  const YOUR_APP_ID="1079ccf0";
  const YOUR_APP_KEY="b7a08d401f924866e55437c6f422c642";

  var url =`https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=${YOUR_APP_KEY}&health=${healthlabel}`;
  
  async function getRecipes(){
    var result = await Axios.get(url);
    setrecipes(result.data.hits);
    console.log(result.data);
  }
  const onSubmit =(e)=>{
    e.preventDefault();
    getRecipes();
  };

  return (
    <div className="app">
      <h1>Food Recipe Plaza </h1>
      <form className='app__searchform'  onSubmit={onSubmit}>
        <input className='app__input' type="text" placeholder='Enter Ingredient' value={query} onChange={(e)=> setquery(e.target.value)}>
        </input>
        <input className='app__search' type="submit" value="Search">
        </input>
        <select className='app__healthlabels'>
          <option onClick={()=> sethealthlabel('vegan')}>Vegan</option>
          <option onClick={()=> sethealthlabel('vegetarian')}>Vegetarian</option>
          <option onClick={()=> sethealthlabel('Paleo')}>Paleo</option>
          <option onClick={()=> sethealthlabel('Dairy-free')}>Dairy-free</option>
          <option onClick={()=> sethealthlabel('Gluten-Free')}>Gluten-Free</option>
          <option onClick={()=> sethealthlabel('Wheat-Free')}>Wheat-Free</option>
          <option onClick={()=> sethealthlabel('Low-sugar')}>Low-sugar</option>
          <option onClick={()=> sethealthlabel('Egg-Free')}>Egg-Free</option>
          <option onClick={()=> sethealthlabel('Tree-Nut-Free')}>Tree-Nut-Free</option>
          <option onClick={()=> sethealthlabel('Soy-Free')}>Soy-Free</option>
          <option onClick={()=> sethealthlabel('Fish-Free')}>Fish-Free</option>
          <option onClick={()=> sethealthlabel('Shellfish-Free')}>Shellfish-Free</option>
        </select>
      </form>
      
      
      <div className='app__recipes'>
        {recipes.map((recipe)=>{
          return(  
          <div className='recipetile' onClick={()=>{
            window.open(recipe["recipe"]["url"]);
          }}>
          <img className='recipetile__img' src={recipe["recipe"]["image"]}/>
          <p className='recipetile__name'>{recipe["recipe"]["label"]}</p>
          </div>)
          

        })}
      </div>
    </div>
  );
}

export default App;
