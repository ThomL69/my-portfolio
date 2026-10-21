import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Si tu utilises react-router
import { MotionConfig } from 'framer-motion';
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
      <Router basename={process.env.PUBLIC_URL}>
        <div className='App'>
          <Header />
          {/* <Aurora
            colorStops={["#008cff", "#c8ff94", "#33ff69"]}
            blend={0.09}
            amplitude={0.5}
            speed={0.7}
          /> */}

          {/* hue=40 : indigo / vert, proche des halos du thème (#4ade80, #38bdf8) */}
          <Orb
            hoverIntensity={0}
            rotateOnHover={false}
            hue={40}
            forceHoverState={false}
          />
          <main id="main">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/projects" element={<Projects />} />
              <Route exact path="/contact" element={<Contact />} />
              <Route exact path="/projects/universityProjects" element={<UniversityProjects />} />
              <Route exact path="/projects/gameJamProjects" element={<GameJamProjects />} />
              <Route exact path="/projects/personalProjects" element={<PersonalProjects />} />
            </Routes>
          </main>

          {Route.name == "/" && <Home />}

          <Footer />
        </div>
      </Router>
    </MotionConfig>
  );
};

export default App;
