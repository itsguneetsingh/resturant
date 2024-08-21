import React, { useRef } from "react";
import "./Recipe.css";
import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Recipe = () => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    speed: 500,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    infinite: true,
  };

  const sliderRef = useRef(null);

  return (
    <div className="recipe-background">
      <div className="headings-div">
        <div className="community-heading" id="recipe-heading">
          <span id="collab-strike">POPULAR</span>
          <div>
            <span className="strike-text">RECIPES</span>
            <div className="line" id="recipe-line"></div>
          </div>
          <button className="community-button" id="recipe-button">
            SEE ALL
          </button>
        </div>
        <div className="share-recipe">
          <span id="share-recipe-text">
            DO YOU WANT TO SHARE YOUR OWN RECIPE?
          </span>
          <button className="community-button" id="send-recipe">
            SEND IT NOW
          </button>
        </div>
      </div>

      <div id="slider-container">
        <Slider ref={sliderRef} {...settings}>
          {/* <RecipeCard
              image={"Images/1000132337.png"}
              servings={4}
              chefChoice={true}
              Heading={"CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"}
              Description={
                "Make a speedy version of romesco sauce with its famous almond and red pepper flavours. Serve on sourdough and add broccoli for a colourful, veget…"
              }
            /> */}
          <div>
            <div className="recipe-card" id="first-slide">
              <img
                src="Images/chef-stamp.svg"
                alt="Chef's choice stamp"
                className="chef-choice"
              />
              <div className="image-part">
                <div className="servings">
                  <div className="servings-num">4</div>
                  <div>SERVINGS</div>
                </div>
                <img
                  src="Images/1000132337.png"
                  alt="Recipe"
                  height={370}
                  width={370}
                />
                <div className="view-recipe">
                  <img src="Images/go-btn.svg" alt="View Recipe" />
                </div>
              </div>
              <div className="description">
                <span className="difficulty">DIFFICULTY</span>
                <span className="card-heading">
                  "CHARRED BROCCOLI & CHEAT’S VEGGIE ROMESCO TOAST"
                </span>
                <span className="card-description">
                  "Make a speedy version of romesco sauce with its famous almond
                  and red pepper flavours. Serve on sourdough and add broccoli
                  for a colourful, veget…"
                </span>
              </div>
            </div>
          </div>
          <div>
            <RecipeCard
              image={"Images/1000132334.png"}
              servings={2}
              chefChoice={false}
              Heading={"PINEAPPLE FRUIT SALAD WITH FRESH CREAM"}
              Description={
                "The pineapple juice is the star of the dressing and what gives it such a refreshing and sweet taste. Pineapple juice is kno..."
              }
            />
          </div>
          <div>
            <div className="recipe-card" id="third-slide">
              <img
                src="Images/chef-stamp.svg"
                alt="Chef's choice stamp"
                className="chef-choice"
              />
              <div className="image-part">
                <div className="servings">
                  <div className="servings-num">2</div>
                  <div>SERVINGS</div>
                </div>
                <img src="Images/1000132335.png" alt="Recipe" />
                <div className="view-recipe">
                  <img src="Images/go-btn.svg" alt="View Recipe" />
                </div>
              </div>
              <div className="description">
                <span className="difficulty">DIFFICULTY</span>
                <span className="card-heading">
                  CHEESE, SPINACH & MUSHROOM STUFFED
                </span>
                <span className="card-description">
                  Amp up this dinner party classic by stuffing three types of
                  cheese, spinach and mushroom in the chicken...
                </span>
              </div>
            </div>
          </div>
          <div>
            <RecipeCard
              image={"Images/1000132336.png"}
              servings={8}
              chefChoice={false}
              Heading={"FETA AND PEACH COUSCOUS"}
              Description={
                "Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta..."
              }
            />
          </div>
          <div>
            <RecipeCard
              image={"Images/1000132334.png"}
              servings={8}
              chefChoice={false}
              Heading={"FETA AND PEACH COUSCOUS"}
              Description={
                "Grab just four ingredients to make this easy, light lunch and enjoy a taste of summer. The combination of peaches, feta..."
              }
            />
          </div>
        </Slider>
      </div>
      <div className="arrows">
        <img
          src="Images/back.svg"
          onClick={() => sliderRef?.current?.slickPrev()}
        />
        <img
          src="Images/next.svg"
          onClick={() => sliderRef?.current?.slickNext()}
        />
      </div>
    </div>
  );
};

export default Recipe;
