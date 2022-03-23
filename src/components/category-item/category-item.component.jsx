import React from "react";
import "./category-item.styles.scss";

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title}</h2>
        <h2>ShopNow</h2>
      </div>
    </div>
  );
}