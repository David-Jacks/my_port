import './App.css';
import Topbar from './components/topbar/topbar';
import LandingSection from './components/landingsection/landingsection';
import About from './components/about/about';
import Projects from './components/projects/project';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <div className="my-container" id="folio">
      <Topbar />
      <LandingSection />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

