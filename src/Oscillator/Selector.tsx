import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Selector.sass"
import Button from 'muicss/lib/react/button';
import Sin from './Sin';
import Sawtooth from './Sawtooth';
import { connect } from 'react-redux'
import store from "Store/Volume"

interface Props {
    volume
}

interface State {
    oscillator
}

function mapStateToProps({volume}){
    return {
        volume 
    }
}

export default connect(mapStateToProps)(class extends React.Component<Props , State> {
    oscillators = []
    constructor(props : Props){
        super(props)
        this.oscillators = [
            new Sin() , 
            new Sawtooth() , 
        ]

        this.state = {
            oscillator : this.oscillators[0] , 
        }
    }
    
    render() {
        store.subscribe(() => this.state.oscillator.getWave(store.getState()))
        return  <>
            {this.oscillators.map( oscillator => <Button onClick={() => this.setState({oscillator})} variant={this.state.oscillator === oscillator ? "" : "flat"} color="primary">{oscillator.name}</Button>)}
        </>
    }
})

