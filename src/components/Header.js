import React from 'react'

const  Header = ({ score }) => {
  return (
    <div className='header'>
    <h1>CodingBDX Paper,rock,scissors game </h1>
      <h1 className='scoring'>Score:{score}</h1>
    </div>
  )
}

export default Header
