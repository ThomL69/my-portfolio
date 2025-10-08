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
    <Router basename={process.env.PUBLIC_URL}>
      <div>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/projects" element={<Projects />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/universityProjects" element={<UniversityProjects />} />
          <Route exact path="/gameJamProjects" element={<GameJamProjects />} />
          <Route exact path="/personalProjects" element={<PersonalProjects />} />
        </Routes>

        {Route.name == "/" && <Home />}
        <Footer />
      </div>
    </Router>
    
  );
};

export default App;

