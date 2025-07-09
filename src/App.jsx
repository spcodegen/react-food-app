import { useState } from 'react'
import Search from './components/Search'

function App() {
  const [foodData,setFoodData] = useState([]);
  return (
    <div className="App">
      <Search foodData={foodData} setFoodData={setFoodData} />
      {foodData.map((food)=>(<h2 key={food.id}>{food.title}</h2>))}
    </div>
  )
}

export default App
