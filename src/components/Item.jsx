import React from "react";
import styles from "./item.module.css";

function Item({ item }) {
  return (
    <div>
      <div className={styles.itemContainer}>
        <div className={styles.imageContainer}>
          <img
            src={
              `https://img.spoonacular.com/ingredients_100x100/` + item.image
            }
            alt={item.name}
          />
        </div>
        <div className={styles.nameContainer}>
          <div className={styles.name}>{item.name}</div>
          <div className={styles.amount}>
            {item.amount} {item.unit}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
