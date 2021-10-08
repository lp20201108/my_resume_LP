import Wrapper from './components/Wrapper';
import SideBar from './components/SideBar';
import AboutMe from './components/AboutMe';
import contacts from './data/contacts';
import techSkills from './data/techSkills.json';
import softSkills from './data/softSkills.json';
import languages from './data/languages.json';
import Projects from './data/commandProjects.json';
//import ownProjects from './data/ownProjects.json';
import experience from './data/experience.json';

function App() {
  return (
    <Wrapper>
      <SideBar
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        languages={languages}
      />
      <AboutMe
        commandProjects={Projects}
        // ownProjects={ownProjects}
        experience={experience}
      />
    </Wrapper>
  );
}

export default App;
