import React from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import "./Community.css";

const cardVariants = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Community = () => {
  // Refs and controls for each card
  const ref1 = React.useRef(null);
  const ref2 = React.useRef(null);
  const ref3 = React.useRef(null);
  const ref4 = React.useRef(null);
  const ref5 = React.useRef(null);
  const ref6 = React.useRef(null);

  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });
  const isInView4 = useInView(ref4, { once: true });
  const isInView5 = useInView(ref5, { once: true });
  const isInView6 = useInView(ref6, { once: true });

  React.useEffect(() => {
    if (isInView1) controls1.start("visible");
    if (isInView2) controls2.start("visible");
    if (isInView3) controls3.start("visible");
    if (isInView4) controls4.start("visible");
    if (isInView5) controls5.start("visible");
    if (isInView6) controls6.start("visible");
  }, [
    controls1,
    controls2,
    controls3,
    controls4,
    controls5,
    controls6,
    isInView1,
    isInView2,
    isInView3,
    isInView4,
    isInView5,
    isInView6,
  ]);

  return (
    <div className="community-background">
      <div className="community-heading">
        <span>MEET OUR</span>
        <div>
          <span className="strike-text">COMMUNITY</span>
          <div className="line"></div>
          <button className="community-button">KNOW MORE</button>
          <div className="community-description">
            LOREM IPSUM DOLOR SIT AMET ERNUT TEMPARTERO SERTU PER NABORE EN
            TORNA ENTALTO
          </div>
        </div>
      </div>
      <div className="cards-container" id="first">
        <motion.div
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={cardVariants}
        >
          <ImageCard image={"Images/1000132330.png"} />
        </motion.div>
        <motion.div
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={cardVariants}
        >
          <TextCard
            username={"@buzzfeedfood"}
            caption={
              "It’s taco Tuesday! These tacos from @jesseszewczyk have no added sugars and are SO good 🌮. Find the recipe from the link in our bio! 📸: @taylormillerphoto"
            }
            likes={"14.7K"}
            comments={"60"}
          />
        </motion.div>
      </div>
      <div className="cards-container" id="second">
        <motion.div
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={cardVariants}
        >
          <TextCard
            username={"@love_food"}
            caption={
              "Waffle sticks in Copenhagen! 🇩🇰😍 Milk chocolate with sprinkles, dark chocolate with coconut and milk chocolate with peanuts! [📷: @foodwithmichel] #lovefood"
            }
            likes={"99.7K"}
            comments={"789"}
          />
        </motion.div>
        <motion.div
          ref={ref4}
          initial="hidden"
          animate={controls4}
          variants={cardVariants}
        >
          <ImageCard image={"Images/1000132331.png"} />
        </motion.div>
      </div>
      <div className="cards-container" id="third">
        <motion.div
          ref={ref5}
          initial="hidden"
          animate={controls5}
          variants={cardVariants}
        >
          <TextCard
            username={"buzzfeedfood"}
            caption={
              "Getting into long weekend mode like 🍤 #pancitpalabok (📷 @jeepneynyc)"
            }
            likes={"18.2K"}
            comments={"152"}
          />
        </motion.div>
        <motion.div
          ref={ref6}
          initial="hidden"
          animate={controls6}
          variants={cardVariants}
        >
          <ImageCard image={"Images/1000132332.png"} />
        </motion.div>
      </div>
      <div className="bottom-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Duis aute irure.
      </div>
      <img src="Images/detail02@3x.png" className="img1" />
      <img src="Images/detail01.png" className="img2" />
      <img src="Images/detail03@2x.png" className="img3" />
    </div>
  );
};

export default Community;

const ImageCard = ({ image }) => {
  return (
    <div className="image-card">
      <img src={image} alt="card" />
      <img
        src="Images/instagram-btn.svg"
        className="ig-button"
        alt="instagram button"
      />
    </div>
  );
};

const TextCard = ({ username, caption, likes, comments }) => {
  return (
    <div className="textcard">
      <div className="username">{username}</div>
      <div className="caption">{caption}</div>
      <div className="engagement">
        <div className="lnk">
          <img src="Images/comments.svg" alt="comments icon" />
          <span className="nums">{comments}</span>
        </div>
        <div className="lnk">
          <img src="Images/likes.svg" alt="likes icon" />
          <span className="nums">{likes}</span>
        </div>
      </div>
    </div>
  );
};
