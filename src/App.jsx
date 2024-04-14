import About from './pages/About';
import Info from './pages/Info';
import Media from './pages/Media';
import Navbar from './pages/Navbar';
//import Proficiency from './pages/Proficiency';
import Project from './pages/Project';
import ProjectContent from './ProjectContent';

function App() {
  return (
    <div className="">
      <Navbar />
      <Info />
      <Project
        ProjectContent={ProjectContent}
      />
      <About />
      <Media />
    </div>
  );
}

export default App;
