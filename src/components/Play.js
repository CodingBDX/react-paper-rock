import { Link } from 'react-router-dom'



import React from 'react'

 const Play = ({ setMyChoice }) => {
   const setChoice = (e) => {
     setMyChoice(e.target.dataset.id);
   };
  
  return (
      <div className="play">Play
    
       <Link to="/game">
         <div data-id="paper" onClick={setChoice} className="paper">
         paper
         </div>
         </Link>

         <Link to="/game">
         <div data-id="scissors" onClick={setChoice} className="scissors">
         scissors
         </div>
         </Link>

         <Link to="/game">
         <div data-id="rock" onClick={setChoice} className='rock'>
         rock
         </div>
       </Link>
    </div>
  
  )
}

export default Play