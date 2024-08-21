import React from "react";
import "./Recipe.css";

const RecipeCard = ({ servings, chefChoice, Heading, Description, image }) => {
  return (
    <div className="recipe-card">
      {chefChoice && (
        <img
          src="Images/chef-stamp.svg"
          alt="Chef's choice stamp"
          className="chef-choice"
        />
      )}
      <div className="image-part">
        <div className="servings">
          <div className="servings-num">{servings}</div>
          <div>SERVINGS</div>
        </div>
        <img src={image} alt="Recipe" />
        <div className="view-recipe">
          <img src="Images/go-btn.svg" alt="View Recipe" />
        </div>
      </div>
      <div className="description">
        <span className="difficulty">DIFFICULTY</span>
        <span className="card-heading">{Heading}</span>
        <span className="card-description">{Description}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
