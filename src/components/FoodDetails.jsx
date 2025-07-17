import React, { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState("");
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "f9f1a906a20d409d8f0c08ca3625de17";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      Food Details {foodId} {food.title} <img src={food.image} alt="" />
    </div>
  );
}

export default FoodDetails;
