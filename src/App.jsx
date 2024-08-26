import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import { useState } from "react";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return(
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <Navbar />
      <Home />
      {/* <About />
      <Projects />
      <Contact /> */}
    </ThemeContext.Provider>
  )
}

export default App;