import React from "react";

function ItemList({ food, isLoading }) {
  return (
    <div>
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        food.extendedIngredients.map((item) => (
          <div>
            <img
              src={
                `https://img.spoonacular.com/ingredients_100x100/` + item.image
              }
              alt={item.name}
            />
            <h3>{item.name}</h3>
            <h3>
              {item.amount} {item.unit}
            </h3>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemList;
