import './App.css';
import Header from './components/Header';
import Play  from './components/Play';
import Game from './components/Game';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React,{ useState } from 'react';

function App() {
  const [myChoice, setMyChoice] = useState("");
  const [score, setScore] = useState(0);


  return (
    <>
    <div className="container">
        <Header score={score}/>
        
          <BrowserRouter>
      <Routes>
            <Route path="/"   element={<Play setMyChoice={setMyChoice} />} />
            
        <Route path="/game"  element={<Game myChoice={myChoice} score={score} setMyScore={setScore} />} />
       

      </Routes>
    </BrowserRouter>
    </div>
    </>
  );
}

export default App;
