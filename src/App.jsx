import About from './pages/About';
import BlogPage from './pages/BlogPage';
import Footer from './pages/Footer';
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
      <BlogPage />
      <Footer />
    </div>
  );
}

export default App;
