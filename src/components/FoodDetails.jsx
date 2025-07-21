import React, { useEffect, useState } from "react";
import styles from "./fooddetails.module.css";

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
    <div className={styles.recipeCard}>
      <div>
        <h1 className={styles.recipeName}>{food.title}</h1>
        <img className={styles.recipeImage} src={food.image} alt="" />
        <div className={styles.recipeDetails}>
          <span>
            <strong>⌚ {food.readyInMinutes} Minutes </strong>
          </span>
          <span>
            <strong> Serves {food.servings}</strong>
          </span>
          <span>
            <strong>
              {food.vegetarian ? " Vegetarian" : " Non-Vegetarian"}
            </strong>
          </span>
          <span>
            <strong>{food.vegan ? " Vegan" : ""}</strong>
          </span>
        </div>
        <div>
          ${" "}
          <span>
            <strong>{food.pricePerServing} Per Serving</strong>
          </span>
        </div>
      </div>
      <h2>Instructions</h2>
      <div className={styles.recipeInstructions}>
        <ol>
          {isLoading ? (
            <p>is Loading....</p>
          ) : (
            food.analyzedInstructions[0].steps.map((step) => (
              <li>{step.step}</li>
            ))
          )}
        </ol>
      </div>
    </div>
  );
}

export default FoodDetails;
