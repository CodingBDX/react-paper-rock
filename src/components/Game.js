import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
 
const Game = ({score, myChoice, setMyScore }) => {
          const [house, setHouse] = useState("");

  const [playerWin, setPlayerWin] = useState("");
 

  const newHousePick = () => {
    const choices = ["rock", "paper", "scissors"]
    setHouse(choices[Math.floor(Math.random() * 3)])
  };

  
  useEffect(() => {
    newHousePick();
  }, [])

  const Result = () => {
    if (myChoice === 'rock' && house === 'scissors') {
      setPlayerWin("win");
      setMyScore(score + 1)

    } else if (myChoice === 'rock' && house === 'paper') {
      setPlayerWin("lose");
      setMyScore(score - 1)

    } else if (myChoice === 'scissors' && house === 'paper') {
      setPlayerWin("win");
      setMyScore(score + 1)

    }
    else if (myChoice === 'scissors' && house === 'rock') {
      setPlayerWin("lose");
      setMyScore(score - 1)

    }
    else if (myChoice === 'paper' && house === 'rock') {
      setPlayerWin("win");

      setMyScore(score + 1)
      

    }
    else if (myChoice === 'paper' && house === 'scissors') {
      setPlayerWin("lose");
      setMyScore(score - 1)

    } else {
      setPlayerWin("draw");
    }

  
  };
  
   useEffect(() => {
    Result();
  }, [house])

 
  return (
                <div className='game'>
        my choice:{myChoice} <br />
        house choice:{house } <br />
 
        result:{playerWin==="win" && <h2 className='green'>you win</h2>}
        {playerWin==="lose" && <h2 className='red'>you lose</h2>}
        {playerWin==="draw" && <h2>you win together</h2>}

      <Link to="/" onClick={() => setHouse()} >
      Play again</Link>
      </div>


  )
}

export default Game