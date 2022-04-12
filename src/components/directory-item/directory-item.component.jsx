import React from "react";
import "./directory-item.styles.scss";

export default function CategoryItem({ category }) {
  const { imageUrl, title } = category;
  return (
    <div className="directory-item-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="directory-body-container">
        <h2>{title}</h2>
        <h2>ShopNow</h2>
      </div>
    </div>
  );
}
