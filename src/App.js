import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/home/homescreen';
import Navbar from './pages/home/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div> 404 not found</div>}></Route>
            {/* add other pages here */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
