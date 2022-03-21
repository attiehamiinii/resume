import Hoom from './Home/Hoom';
import AboutMe from './AboutMe/AboutMe';
import Skill from './Skill/Skill';
import SkillFooter from './Skill/SkillFooter';
import Contact from './ContactMe/Contact';

const MiddleSection = () => {

  return (
    <>
    
      <div id="home">
        <Hoom />
      </div>
      <div id="about">
        <AboutMe />
      </div>
      <div id="skill">
        <Skill />
      </div>
      <div id="skillfooter">
        <SkillFooter />
      </div>

      <div id="contact">
        <Contact />
      </div>
    
    </>
  );
};
export default MiddleSection;
