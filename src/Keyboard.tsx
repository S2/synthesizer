import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Keyboard.sass"

const Key = ({interval}) => {
    const notes = {
        0  : {name : "A"  , isBlack : false}  , 
        1  : {name : "A#" , isBlack : true }  , 
        2  : {name : "B"  , isBlack : false}  , 
        3  : {name : "C"  , isBlack : false}  , 
        4  : {name : "C#" , isBlack : true }  , 
        5  : {name : "D"  , isBlack : false}  , 
        6  : {name : "D#" , isBlack : true }  , 
        7  : {name : "E"  , isBlack : false}  , 
        8  : {name : "F"  , isBlack : false}  , 
        9  : {name : "F#" , isBlack : true }  , 
        10 : {name : "G"  , isBlack : false}  , 
        11 : {name : "G#" , isBlack : true }  , 
    }
    const note = notes[interval % 12]

    return <div className={`${note.isBlack ? "black" : ""}`}>
        {note.name}
    </div>
}

export default ()=>{
    const keys = []
    for(let i = 0 ; i < 88;i++){
        keys.push(i)
    }

    return <div className="keyboard">
        {keys.map( i => <Key interval={i}/>)}
    </div>
}

