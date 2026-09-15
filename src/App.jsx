import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { useState, useRef } from "react";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  return(
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <Navbar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef} />
      <Home homeRef={homeRef} aboutRef={aboutRef}/>
      <About aboutRef={aboutRef} projectsRef={projectsRef} />
      <Projects projectsRef={projectsRef} contactRef={contactRef} />
      <Contact contactRef={contactRef} />
    </ThemeContext.Provider>
  )
}

export default App;
