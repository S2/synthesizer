import * as React from 'react'
import * as ReactDom from 'react-dom'
import "Index.sass"
import Volume from "Volume"
import Oscillator from "Oscillator/Selector"

interface Props {
    
}

interface State {
    
}

class Index extends React.Component<Props , State> {
    constructor(props : Props){
        super(props)
        this.state = {
        }
    }
    
    render() {
        return <>
            <h1>Volume</h1>
            <Volume />
            <h1>Oscillator</h1>
            <Oscillator />
        </>
    }
}

ReactDom.render(<Index />, document.getElementById("content"));
