import { Link } from 'react-router-dom'



import React from 'react'


const Play = ({ setMyChoice }) => {
  const setChoice = (e) => {
    setMyChoice(e.target.dataset.id);
  };
  
  return (
    <div className="play">
    
      <Link to="/game">
        <div data-id="paper" onClick={setChoice} className="paper">
          paper
        </div>
        <div>
        <img src="../img/paper.svg" data-id="paper" onClick={setChoice}/>
        </div>
      </Link>

      <Link to="/game">
        <div data-id="scissors" onClick={setChoice} className="scissors">
          scissors
        <div>
        <img data-id="scissors" onClick={setChoice} src="../img/scissors.svg" />
        </div>
          
        </div>
      </Link>

      <Link to="/game">
        <div data-id="rock" onClick={setChoice} className='rock'>
          rock
            <div>
        <img src="../img/rock.svg" data-id="rock" onClick={setChoice} />
        </div>
      
        </div>
      </Link>
    </div>
  
  );
};

export default Play