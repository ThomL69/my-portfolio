import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Si tu utilises react-router
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import UniversityProjects from './pages/UniversityProjects';
import PersonalProjects from './pages/PersonalProjects';
import GameJamProjects from './pages/GameJamProjects';
import Aurora from './components/Aurora';
import Particles from './components/Particles'
import './App.css';

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Aurora
          colorStops={["#006eff", "#94d1ff", "#33ff69"]}
          blend={0.09}
          amplitude={1.0}
          speed={0.7}
        />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/projects/universityProjects" element={<UniversityProjects />} />
          <Route exact path="/projects/gameJamProjects" element={<GameJamProjects />} />
          <Route exact path="/projects/personalProjects" element={<PersonalProjects />} />
        </Routes>

        {Route.name == "/" && <Home />}
        <div className="aurora-rotate" >
          <Aurora
            colorStops={["#33ff69", "#94d1ff", "#006eff"]}
            blend={0.09}
            amplitude={1.0}
            speed={0.7}
          />
        </div>

        <Footer />
      </div>
    </Router>

  );
};

export default App;

