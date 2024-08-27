import React from "react";
import "./Menu.css";
import MenuSection from "./MenuSection";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const starters = [
    {
      itemHeading: "QUINOA CROQUETTAS",
      itemDescription:
        "Quinoa and cheddar croquettas with aji rocotto & pineapple salsa (v)",
      itemPrice: "£4.95",
    },
    {
      itemHeading: "CHIFA CHICHARRONES",
      itemDescription: "Slow cooked, crispy pork belly with sweet soy sauce",
      itemPrice: "£6.95",
    },
    {
      itemHeading: "CALAMARES",
      itemDescription: "Crispy baby squid with pickled jalapeño miso salsa",
      itemPrice: "£4.95",
    },
  ];

  const mainCourse = [
    {
      itemHeading: "EL CLASICO",
      itemDescription:
        "Sea bass ceviche with aji limo tiger’s milk, sweet potato purée, choclo corn, red onion, coriander & plantain (gf)",
      itemPrice: "£8.95",
    },
    {
      itemHeading: "TIRADITO CALLAO",
      itemDescription:
        "Cobia tiradito with coriander tiger’s milk, black tobika, crème fraiche & sweet potato crunchies",
      itemPrice: "£8.95",
    },
  ];

  const sides = [
    {
      itemHeading: "SUPER POLLO",
      itemDescription: "Marinated corn fed chicken pieces with rocotto salsa",
      itemPrice: "£4.95",
    },
    {
      itemHeading: "PATATAS FRITAS",
      itemDescription: "Sweet potato fries with aji rocotto mayonnaise (v)",
      itemPrice: "£3.95",
    },
  ];

  const desserts = [
    {
      itemHeading: "ICECREAM",
      itemDescription: "Lorem ipsum dolor sit amet salerma petrum sea",
      itemPrice: "£3.95",
    },
    {
      itemHeading: "TIRAMISU",
      itemDescription: "Lorem ipsum dolor sit amet salerma petrum sea",
      itemPrice: "£3.95",
    },
    {
      itemHeading: "CHOCOLATE BROWNIE",
      itemDescription: "Lorem ipsum dolor sit amet salerma petrum sea",
      itemPrice: "£3.95",
    },
  ];

  return (
    <div className="menu-background">
      <div className="menu-top-group">
        <div className="community-heading" id="menu-heading">
          <span className="strike-text">OUR MENU</span>
          <div className="line" id="strike-line"></div>
        </div>
        <button className="community-button" id="menu-button">
          KNOW MORE
        </button>
      </div>

      <div className="menu-sections">
        <MenuSection heading={"STARTERS"} menu={starters} index={0} />
        <MenuSection heading={"MAIN COURSES"} menu={mainCourse} index={1} />
        <MenuSection heading={"SIDES"} menu={sides} index={2} />
        <MenuSection heading={"DESSERTS"} menu={desserts} index={3} />
      </div>
    </div>
  );
};

export default Menu;
