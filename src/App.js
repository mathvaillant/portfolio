import ReactTooltip from 'react-tooltip';
import './App.scss';
import Header from "./components/Header/Header";
import Showcase from "./components/Showcase/Showcase";
import Articles from "./components/Articles/Articles";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Profile from "./components/Profile/Profile";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";

const App = () => {

  return (
    <div className="App">
      <Header />
      <Profile />
      <Showcase/>
      <Skills />
      // <Projects />
      <Articles />
      <Experience />
      <Footer />

      <i class="fa fa-long-arrow-down Arrow" aria-hidden="true"></i>
      <ReactTooltip delayUpdate={1000}/>
    </div>
  );
}

export default App;
