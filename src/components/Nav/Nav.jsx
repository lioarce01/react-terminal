import React from 'react'
import './Nav.css'

const Nav = () => {

// BUTTON TO CLOSE THE TAB WHEN CLICKED ON THE NAVBAR 
    const closeTab = () => {
        window.close(window.location.href)

    }

  return (
    <div className="nav">
        <div className="nav__left">
            <span className='red' onClick={closeTab}></span>
            <span className='yellow'></span>
            <span className='green'></span>
        </div>
        <div className="nav__right">
            <span className='title'>user@local</span>
        </div>
    </div>
  )
}

export default Nav