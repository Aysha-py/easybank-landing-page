import React from 'react'
import './App.css';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import Articles from "./components/Articles"
import Footer from "./components/Footer"
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"


function App() {
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        
          <Route path='/' element={<MainPage/>}/>
          <Route path='/blog' element={<Articles/>}/>
         
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
