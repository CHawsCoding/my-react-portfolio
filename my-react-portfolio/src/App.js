import React from "react";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <React.Fragment>
      <Header />
      <About />
      <Portfolio />
      <Experience />
      <Contact />
      <Footer />
    </React.Fragment>
  );
}

export default App;