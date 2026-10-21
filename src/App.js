import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import UniversityProjects from './pages/UniversityProjects';
import PersonalProjects from './pages/PersonalProjects';
import GameJamProjects from './pages/GameJamProjects';
import Orb from './components/Orb';
import './App.css';

const App = () => {
  return (
    // reducedMotion="user" : les animations de déplacement sont coupées si l'utilisateur le demande
    <MotionConfig reducedMotion="user">
      <Router>
        <div className='App'>
          <Header />
          {/* hue=40 : indigo / vert, proche des halos du thème (#4ade80, #38bdf8) */}
          <Orb
            hoverIntensity={0}
            rotateOnHover={false}
            hue={40}
            forceHoverState={false}
          />
          <main id="main">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects/universityProjects" element={<UniversityProjects />} />
              <Route path="/projects/gameJamProjects" element={<GameJamProjects />} />
              <Route path="/projects/personalProjects" element={<PersonalProjects />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
};

export default App;
