import React from 'react'
import Nav from '../Nav/Nav'
import Term from '../Term/Term'
import './Terminal.css'

const Terminal = () => {
  return (
    <div>
      <div className='terminal_container'>
        <div className='terminal_window'>
            <Nav/>
            <Term/>
        </div>
      </div>
    </div>
  )
}

export default Terminal