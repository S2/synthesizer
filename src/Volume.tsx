import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Volume.sass"
import Input from 'muicss/lib/react/input';

interface Props {
    
}

interface State {
    volume
}

export default class extends React.Component<Props , State> {
    constructor(props : Props){
        super(props)
        this.state = {
            volume : 50
        }
    }
    
    render() {
        return <>
            <Input defaultValue={this.state.volume} type="number" onChange={e => this.setState({volume:e.target.value})}/>
        </>
    }
}
