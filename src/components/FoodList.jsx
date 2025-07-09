import React from "react";
import FoodItem from "../../FoodItem";

function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <FoodItem key={food.id} food={food} />
      ))}
    </div>
  );
}

export default FoodList;
