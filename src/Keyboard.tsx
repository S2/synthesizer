import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Keyboard.sass"
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        setFrequency: (n) => {
            dispatch({ type:"SET_FREQUENCY" , frequency:n})
        },
        keyUp: ()=>{
            dispatch({ type:"KEY_UP"})
        },
    }
}

const Key = connect(null , mapDispatchToProps)(({interval , setFrequency , keyUp}) => {
    const notes = {
        0  : {name : "A"  , isBlack : false , rootFrequency : 27.5   , }  , 
        1  : {name : "A#" , isBlack : true  , rootFrequency : 29.135 , }  , 
        2  : {name : "B"  , isBlack : false , rootFrequency : 30.868 , }  , 
        3  : {name : "C"  , isBlack : false , rootFrequency : 32.703 , }  , 
        4  : {name : "C#" , isBlack : true  , rootFrequency : 34.648 , }  , 
        5  : {name : "D"  , isBlack : false , rootFrequency : 36.708 , }  , 
        6  : {name : "D#" , isBlack : true  , rootFrequency : 38.891 , }  , 
        7  : {name : "E"  , isBlack : false , rootFrequency : 41.203 , }  , 
        8  : {name : "F"  , isBlack : false , rootFrequency : 43.654 , }  , 
        9  : {name : "F#" , isBlack : true  , rootFrequency : 46.249 , }  , 
        10 : {name : "G"  , isBlack : false , rootFrequency : 48.999 , }  , 
        11 : {name : "G#" , isBlack : true  , rootFrequency : 51.913 , }  , 
    }
    const note = notes[interval % 12]
    const octave = Math.floor(interval / 12)
    const frequency = note.rootFrequency * Math.pow(2 , (octave + 1))

    return <div onMouseDown={()=> {
        setFrequency(frequency) 
    }} onMouseOut={()=> {
        keyUp() 
    }} onMouseUp={()=> {
        keyUp() 
    }} className={`${note.isBlack ? "black" : ""}`}>
        {note.name}
    </div>
})

export default ()=>{
    const keys = []
    for(let i = 0 ; i < 88;i++){
        keys.push(i)
    }

    return <div className="keyboard">
        {keys.map( i => <Key interval={i}/>)}
    </div>
}

