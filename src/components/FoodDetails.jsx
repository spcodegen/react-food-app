import React, { useEffect, useState } from "react";

function FoodDetails({ foodId }) {
  const [food, setFood] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const URL = `https://api.spoonacular.com/recipes/${foodId}/information`;
  const API_KEY = "f9f1a906a20d409d8f0c08ca3625de17";

  useEffect(() => {
    async function fetchFood() {
      const res = await fetch(`${URL}?apiKey=${API_KEY}`);
      const data = await res.json();
      console.log(data);
      setFood(data);
      setIsLoading(false);
    }
    fetchFood();
  }, [foodId]);

  return (
    <div>
      <div>
        <h2>{food.title}</h2>
        <img src={food.image} alt="" />
        <div>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong> Serves {food.servings}</strong>
          </span>
          <span>{food.vegetarian ? " Vegetarian" : " Non-Vegetarian"}</span>
          <span>{food.vegan ? " Vegan" : ""}</span>
        </div>
        <div>
          $ <span>{food.pricePerServing} Per Serving</span>
        </div>
      </div>
      <div>
        <h2>Instructions</h2>
        {isLoading ? (
          <p>is Loading....</p>
        ) : (
          food.analyzedInstructions[0].steps.map((step) => <li>{step.step}</li>)
        )}
      </div>
    </div>
  );
}

export default FoodDetails;
