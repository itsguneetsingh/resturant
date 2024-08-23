import React, { useEffect, useState } from "react";
import { motion, useViewportScroll } from "framer-motion";
import "./Home.css";

const Home = () => {
  const { scrollY } = useViewportScroll();
  const [currentSection, setCurrentSection] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollY.get();
      const sectionHeight = window.innerHeight;

      // Determine the current section based on scroll position
      // Adding a small offset (like 0.5) to ensure rounding works as expected
      const current = Math.min(
        Math.max(Math.round(scrollPosition / sectionHeight) + 1, 1),
        6
      );
      setCurrentSection(current);
    };

    scrollY.onChange(handleScroll);

    return () => {
      scrollY.clearListeners();
    };
  }, [scrollY]);

  return (
    <div className="home-background">
      <motion.div
        className="navbar"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div>
          <span className="navbar-logo">LOGO</span>
          <span className="left-text">ABOUT</span>
          <span className="left-text">COMMUNITY</span>
          <span className="left-text">LOCATION</span>
          <span className="left-text">OUR MENU</span>
          <span className="left-text">RECIPES</span>
        </div>
        <div>
          <span className="right-text">CONTACT</span>
          <span className="right-text">LOGIN</span>
        </div>
      </motion.div>

      <img src="Images/stamp.svg" id="stamp" alt="stamp" height={150} />

      <div className="body">
        <div className="meter">
          {Array.from({ length: 6 }, (_, index) => (
            <motion.div
              key={index}
              className={
                currentSection === index + 1 ? "big-rect" : "small-rect"
              }
              initial={{ width: currentSection === index + 1 ? 30 : 15 }}
              animate={{ width: currentSection === index + 1 ? 30 : 15 }}
              transition={{ duration: 0.3 }}
            />
          ))}
          <motion.span
            id="number"
            initial={{ y: (currentSection - 1) * 22 }}
            animate={{ y: (currentSection - 1) * 22 }}
            transition={{ duration: 0.3 }}
          >
            {`0${currentSection}`}
          </motion.span>
        </div>
        {/* <div className="spacer"></div> */}
        <div className="heading">
          <div className="medium-text">THE BEST FOODIE</div>
          <div id="large-text">EXPERIENCE</div>
          <div id="small-text">NOW IN LONDON</div>
        </div>
        <button className="home-button">REQUEST INFO</button>
      </div>
    </div>
  );
};

export default Home;
