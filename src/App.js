// import logo from './logo.svg';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import NavBar from './Navbar/NavBar';
import NavbarHook from './NavbarHook/NavbarHook';
import Hero from './components/Hero'
// import Partners from './components/Partners';
// import About from './components/About'
// import Team from './components/Team'
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <Router>
      {/* <NavBar /> */}
      <NavbarHook />
      <Hero/>
      <Footer />
      {/* <Partners /> */}
      <main className='mainContent'>
        <Routes>
          {/* <Route path='/about' element={<About />}/> */}
          {/* <Route path='/team' element={<Team />}/>
          <Route /> */}
        </Routes>
      </main>
    </Router>
  );
}

export default App;
