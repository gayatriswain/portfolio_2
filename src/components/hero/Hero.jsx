import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <a href="/public/24342_Gayatri Swain (2).pdf" target="blank">
          <button className="button">resume</button>
          </a>
          <motion.h2 variants={textVariants}>Gayatri Swain</motion.h2>
          <motion.h1 variants={textVariants}>
          Software Engineer
          </motion.h1>
          {/* <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>
              Resume
            </motion.button>
            
          </motion.div> */}
          <div className="para">
          <motion.p variants={textVariants}>
          
          I am a dedicated software engineer with a passion for crafting efficient and innovative solutions to complex problems.
My commitment to continuous learning drives me to create impactful and scalable software solutions for a seamless user experience.
         
          </motion.p>
          </div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Welcome to my Portfolio
      </motion.div>
      <div className="imageContainer">
        <img src="/public/Untitled_design-removebg-preview.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;