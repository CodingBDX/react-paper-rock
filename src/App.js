import './App.css';
import Header from './components/Header';
import Play  from './components/Play';
import Game from './components/Game';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{ useState } from 'react';

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setMyScore] = useState(0);


  return (
    <>
    <div className="container">
        <Header score={ score}/>
        
          <BrowserRouter>
      <Routes>
            <Route path="/" setMyChoice={setMyChoice} element={<Play />} />
            
        <Route path="/game" myChoice={myChoice} score={score} setMyScore={setMyScore} element={<Game />} />
        <Route path="*" element={<Play />} />

      </Routes>
    </BrowserRouter>
    </div>
    <Footer/>
    </>
  );
}

export default App;
