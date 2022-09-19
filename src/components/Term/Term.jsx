import React, { useState, useEffect, useRef } from 'react'
import './Term.css'
import commands from '../commands'


const Term = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            let newOutput = ''
            switch(input) {
                case 'help':
                    newOutput = commands.help.description
                break

                case 'clear': 
                newOutput = ''
                break

                case 'whois':
                    newOutput += commands.whois.fn()
                break

                case 'linkedin':
                    newOutput += commands.linkedin.fn()
                break
                
                case 'github':
                    newOutput += commands.github.fn()
                break

                case 'commands':
                    newOutput += commands.commands.fn()
                break

                default: newOutput = 'command not found: ' + input
            }
            setOutput(newOutput)
            setInput('')
            }
        }

    const onChange = (e) => {
        setInput(e.target.value)
    }

    return (
    <div
    //focus on input when click anywhere on the terminal page 
        onClick={() => inputRef.current.focus()}
        className="term"
    >
        <div className="term__header">
            <p>Hi!, welcome to my terminal emulator built with REACT.</p>
            <p>Type <strong className='help'>`help`</strong> to get more information.</p>
        </div>
        <div className="term__input">
            <div className="typewriter">
                {output}
            </div>
            <div className="input">
            <label className='term__user_label'>user@local:~ $</label>
            <input
                className='term__cursor'
                ref={inputRef}
                type={'text'}
                value={input}
                onChange={onChange}
                onKeyDown={onKeyDown}
            />
            </div>
        </div>
    </div>
  )
}

export default Term