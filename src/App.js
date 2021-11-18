import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Discover from "./pages/Discover";
import About from "./pages/About";
// import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";
// import Routes from ""

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Routes>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
          </Routes>
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
