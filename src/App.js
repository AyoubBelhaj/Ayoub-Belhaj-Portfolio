import Navbar from "./components/NavBar/navbar";
import Footer from "./components/Footer/footer";
import {  Route, Routes } from "react-router-dom";
import Intro from "./components/Intro/intro";
import Skills from "./components/Skills/skills";
import Contact from "./components/Contact/contact";
import Works from "./components/Works/works";
import './app.css';

function App() {
  return (
    <div className="App">
        <Navbar/>
        
          <Routes>
            <Route path="/" index element={<Intro/>} />
            <Route path="/skills" element={<Skills/>} />
            <Route path="/works" element={<Works/>} />
            <Route path="/contact" element={<Contact/>} />
          </Routes>
        
        <Footer/>
    </div>
  );
}

export default App;
