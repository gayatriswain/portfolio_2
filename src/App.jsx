
import "./app.scss";

import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Parallax from "./components/parallax/Parallax";
import Skills from "./components/Skills";
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact";

  
const App = () => {
  return (
  <div>
    
    <section id="Homepage">
      <Navbar/>
      <Hero/>
    </section>
   <section id="skillss">
   <Parallax type="skills"></Parallax>
   
   </section>
   <section id="s">
    <Skills/>
   </section>
   <section id="Projects">
   <Parallax type="projects" />
   </section>
   <Portfolio/>
   <section id="Contact">
        <Contact />
      </section>
   
  
   </div>
  )
};
export default App;
