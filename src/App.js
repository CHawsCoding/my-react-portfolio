import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Portfolio from "./components/portfolio/Portfolio";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={
            <>
              <Experience />
            </>
          } />  {/* Updated this route */}
        </Routes>
        <Footer />
      </React.Fragment>
    </Router>
  );
}

export default App;






