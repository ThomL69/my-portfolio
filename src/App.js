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

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects/personalProjects" element={<PersonalProjects />} />
          <Route path="/projects/universityProjects" element={<UniversityProjects />} />
          <Route path="/projects/gameJamProjects" element={<GameJamProjects />} />
        </Routes>

        {Route.name == "/" && <Home />}
        <Footer />
      </div>
    </Router>
    
  );
};

export default App;

