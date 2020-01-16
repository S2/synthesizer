import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Index.sass"

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
        return <></>
    }
}

ReactDom.render(<Index />, document.getElementById("content"));
