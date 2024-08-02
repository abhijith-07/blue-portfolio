import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import { ThemeContext } from "./contexts/themeContext";

function App() {
  const [darkTheme, setDarkTheme] = useState(true);
  return(
    <ThemeContext.Provider value={{darkTheme, setDarkTheme}}>
      <Navbar />
      <Home />
    </ThemeContext.Provider>
  )
}

export default App;