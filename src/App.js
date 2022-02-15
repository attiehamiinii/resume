import "./App.css";
import Hoom from "./portfolio container/Home/Hoom";
import AboutMe from "./portfolio container/AboutMe/AboutMe";
import Skill from "./portfolio container/Skill/Skill";
import SkillFooter from "./portfolio container/Skill/SkillFooter";
import Contact from "./portfolio container/ContactMe/Contact";


function App() {
  return (

<div className="App">
  
  <Hoom/>
  <AboutMe/>
  <Skill/>
  <SkillFooter/>
  <Contact/>

    </div>
   

    

  );
}

export default App;