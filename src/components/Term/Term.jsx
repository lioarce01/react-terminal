import React, { useState, useEffect, useRef } from 'react'
import './Term.css'
import { help, socials, whois, projects } from '../commands'


const Term = () => {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState('')
    const inputRef = useRef()

    useEffect(() => {
        inputRef.current.focus()
    }, [])

    //USE EFFECT to listen for key press and play typing sound effect
    useEffect(() => {
        const handleKeyPress = () => {
            const audio = new Audio('../../sounds/typing.mp3')
            audio.play()
        }
        document.addEventListener('keypress', handleKeyPress)
        return () => {
            document.removeEventListener('keypress', handleKeyPress)
        }
    }, [])

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            let newOutput = ''
            switch(input) { 
                case 'help':
                    newOutput += addLines(help)
                    break
                case 'socials':
                    newOutput += addLines(socials)
                    break;
                case 'whois':
                    newOutput += addLines(whois)
                    break;
                case 'projects':
                    newOutput += addLines(projects)
                    break;
                case 'linkedin': 
                    newOutput = 'Opening Linkedin...'

                    setTimeout(() => {
                        window.open('https://www.linkedin.com/in/lionel-arce/', '_blank', 'noopener,noreferrer')
                    }, 1000)

                    setTimeout(() => {
                        newOutput = newOutput.replace('Opening Linkedin...', 'Linkedin opened!')
                        setOutput(newOutput)
                    }, 2000)
                    break;
                case 'github': 
                    newOutput = 'Opening github...'
                        
                        setTimeout(() => {
                            window.open('https://github.com/lioarce01', '_blank', 'noopener,noreferrer')
                        }, 1000)

                        setTimeout(() => {
                            newOutput = newOutput.replace('Opening github...', 'github opened!')
                            setOutput(newOutput)
                        }, 2000)
                    break;
                case 'portfolio':
                    //set output with loading animation and then redirect to portfolio and then delete loading animation
                    newOutput = 'Opening portfolio...'

                    setTimeout(() => {
                        window.open('https://lionelarce-portfolio.vercel.app', '_blank', 'noopener,noreferrer')
                    }, 1000)

                    setTimeout(() => {
                        newOutput = newOutput.replace('Opening portfolio...', 'Portfolio opened!')
                        setOutput(newOutput)
                    }, 2000)
                    break;
                case 'repo':
                    newOutput = 'Opening repo...'
                    
                    setTimeout(() => {
                        window.open('https://github.com/lioarce01/react-terminal', '_blank', 'noopener,noreferrer')
                    }, 1000)

                    setTimeout(() => {
                        newOutput = newOutput.replace('Opening repo...', 'Repo opened!')
                        setOutput(newOutput)
                    }, 2000)
                    break;
                case 'clear':
                    newOutput = ''
                    break;
                default: newOutput = 'command not found: ' + input
            }
            //set output to old output + new output
            setOutput(newOutput)
            setInput('')
        }
    }

    // map an array of strings to a string with line breaks and divs between each string in the array with a timeout of 300ms between each line
    const addLines = (arr) => {
        let command = ''
        let output = ''

        arr.map((line, i) => {
            setTimeout(() => {
                // command += line + '\n'
                // setOutput(command)
                return (
                    <div>
                    {command += line + '\n'}
                        {setOutput(command)}
                    </div>
                )
            }, 200 * i)
        })

        return output
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
            <div className="output">
                {output}
            </div>
            <div className="input">
            <label className='term__user_label'>user@local.com:~$</label>
                <input
                className='terminal__input'
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