import React, { useEffect, useState } from 'react'

const URL = "https://api.spoonacular.com/recipes/complexSearch"
const API_KEY = "f9f1a906a20d409d8f0c08ca3625de17"

function Search({foodData,setFoodData}) {
  const [query,setQuery] = useState("");  
  useEffect(()=>{
    async function fetchFood() {
        const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`);
        const data = await res.json();
        console.log(data.results);
        setFoodData(data.results);
    }
    fetchFood();
  },[query])
  
  return (
    <div>
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)}/>
    </div>
  )
}

export default Search