import ReactTooltip from 'react-tooltip';
import './App.scss';
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";

const App = () => {

  return (
    <div className="App">
      <Main />
      <About />
      <Skills />
      <Projects />
      <h3>Experience</h3>
      <Experience />
      <Footer />

      <ReactTooltip delayUpdate={1000}/>
    </div>
  );
}

export default App;
