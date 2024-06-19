import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "React Commerce Website",
    img: "/Screenshot 2024-06-10 214155.png",
    desc: "Our Symptom-Based Disease Diagnosis Web App leverages machine learning and healthcare data to provide quick and user-centric insights into health conditions, enhancing accessibility to healthcare information.",
    demoLink: "https://github.com/gayatriswain/Medicine-Recommendation-System"
  },
  {
    id: 2,
    title: "React Commerce Website",
    img: "/Screenshot 2024-06-03 220924.png",
    desc: "This project is a comprehensive eCommerce website developed using Firebase, showcasing a complete suite of online shopping functionalities. It integrates modern web development techniques with a powerful backend service, providing a seamless and secure user experience.",
    demoLink: "https://github.com/gayatriswain/E_Commerce"
  },
  {
    id: 3,
    title: "Weather Web App",
    img: "/Screenshot 2024-05-29 000843.png",
    desc: "Created a dynamic weather web application that provides real-time weather updates for users. Utilized APIs to fetch and display accurate weather data, offering users convenient access to forecasts and conditions for their location and beyond.",
    demoLink: "https://hawaayein-gayatriswain.netlify.app/"
  },
  {
    id: 4,
    title: "Sudoku Game",
    img: "/Screenshot 2024-05-29 000157.png",
    desc: "Developed a Sudoku game application, implementing classic gameplay mechanics within a user-friendly interface. Designed to challenge logical thinking and problem-solving skills, providing an engaging experience for players of all levels.",
    demoLink: "https://gayatriswain.github.io/sudoku-game/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <a href={item.demoLink} target="_blank" rel="noopener noreferrer">
            <button>See Demo</button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;