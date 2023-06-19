import { useState } from "react";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import NavBar from "./Pages/NavBar";
import Skills from "./Pages/Skills";
import Work from "./Pages/Work";
import Loader2 from "./Components/Loader/Loader2";
import Footer from "./Pages/Footer";

function App() {

  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };


  return (
    <div className="App">
      {isLoading ? (
        <Loader2 finishLoading={finishLoading} />
        // <Loader finishLoading={finishLoading} />
      ) : (
        <>
          <NavBar />
          <Home />
          <About />
          <Skills />
          <Work />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
