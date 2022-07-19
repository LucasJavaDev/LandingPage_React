import "./App.css";
import Header from "./components/Header";
import Feature from "./components/Feature";
import About from "./components/About";
import aboutImage from "./images/about.png";
import aboutImage1 from "./images/download.png";
import Presentation from "./components/Presentation";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Feature />
      <About
        image={aboutImage}
        title="Comes With All You Need For Daily Life"
        button="Get The App"
      />
      <About
        image={aboutImage1}
        title="Download And Get App Now"
        button="Download"
      />
      <Presentation />
      <Contact />
    </div>
  );
}

export default App;
