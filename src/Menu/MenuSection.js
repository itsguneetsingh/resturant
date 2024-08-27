import React, { useEffect, useRef, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";

const MenuSection = ({ heading, menu, index }) => {
  const ref = useRef(null);
  const [elementTop, setElementTop] = useState(0);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);

  const { scrollY } = useScroll();

  useEffect(() => {
    const handleResize = () => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        setElementTop(rect.top + window.scrollY);
      }
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial setup

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Define scroll positions for entry, hold, and exit phases
  const start = elementTop - 1000;
  const middle = elementTop;
  const end = elementTop + 500; // Adjust as needed for how long the element holds

  // Define the output ranges for entry, hold, and exit animations
  const inputRange = [start, middle, end];
  const outputRange = index % 2 === 0 ? [-400, 10, -800] : [400, 10, 800];

  // Use transform to apply the animation phases (always call useTransform)
  const y = useTransform(scrollY, inputRange, outputRange);

  // Conditionally apply the transform style
  const motionStyle = isDesktop ? { y } : {};

  return (
    <motion.div ref={ref} className="menu-section" style={motionStyle}>
      <h2 className="submenu-heading">{heading}</h2>
      <div>
        {menu.map((item, idx) => (
          <div key={idx} style={{ marginBottom: "1em" }}>
            <h3 className="menu-item-heading">{item.itemHeading}</h3>
            <p className="menu-item-description">{item.itemDescription}</p>
            <p className="menu-item-price">{item.itemPrice}</p>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default MenuSection;
