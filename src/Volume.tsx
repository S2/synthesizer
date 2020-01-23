import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./Volume.sass"
import Input from 'muicss/lib/react/input';
import store from "Store/Volume"
import { connect } from 'react-redux'

const Component = ({volume , set})=> <>
    <Input defaultValue={volume} type="number" onChange={e => set(parseInt(e.target.value))}/>
</>

function mapStateToProps({volume}){
    return {
        volume 
    }
}

const mapDispatchToProps = dispatch => {
    return {
        set: (n) => {
            dispatch({ type:"SET_VOLUME" , volume:n})
        },
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Component)
