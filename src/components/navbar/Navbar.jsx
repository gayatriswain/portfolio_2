import Sidebar from "../siderbar/Siderbar";
import "./navbar.scss";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar/>
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Portfolio
        </motion.span>
        <div className="social">
        
          <a href="https://www.facebook.com/gayatri.shokeen79">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.instagram.com/__gayatrrii?igsh=MTJlbzh6dWtlcXh2dw==">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="https://github.com/gayatriswain">
            <img src="/Github-PNG-Image.png" alt="" />
          </a>
          <a href="www.linkedin.com/in/gayatri-swain-8b6123235">
            <img src="/Linkedin.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;