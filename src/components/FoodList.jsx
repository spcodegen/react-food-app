import React from "react";

function FoodList({ foodData }) {
  return (
    <div>
      {foodData.map((food) => (
        <h2 key={food.id}>{food.title}</h2>
      ))}
    </div>
  );
}

export default FoodList;
