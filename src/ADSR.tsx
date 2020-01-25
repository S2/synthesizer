import * as React from 'react'
import * as ReactDom from 'react-dom'
import "./ADSR.sass"
import Slider , { Range } from 'rc-slider';
import 'rc-slider/assets/index.css';
import store from "Store/Volume"
import { connect } from 'react-redux'

const mapDispatchToProps = dispatch => {
    return {
        setAttackTime: (n) => {
            dispatch({ type:"SET_ATTACK_TIME" , time:n})
        },
        setAttackGain: (n) => {
            dispatch({ type:"SET_ATTACK_GAIN" , gain:n})
        },
        setDecayTime: (n) => {
            dispatch({ type:"SET_DECAY_TIME" , time:n})
        },
        setDecayGain: (n) => {
            dispatch({ type:"SET_DECAY_GAIN" , gain:n})
        },
        setSustainTime: (n) => {
            dispatch({ type:"SET_SUSTAIN_TIME" , time:n})
        },
        setSustainGain: (n) => {
            dispatch({ type:"SET_SUSTAIN_GAIN" , gain:n})
        },
        setReleaseTime: (n) => {
            dispatch({ type:"SET_RELEASE_TIME" , time:n})
        },
        setReleaseGain: (n) => {
            dispatch({ type:"SET_RELEASE_GAIN" , gain:n})
        },
    }
}


export default connect(null , mapDispatchToProps)(({setAttackTime , setAttackGain , setDecayTime , setDecayGain , setSustainTime , setSustainGain , setReleaseTime , setReleaseGain})=> <div className="adsr">
        <h1>Attack</h1>
        <h2>time</h2>
        <div>
            <Slider defaultValue={store.getState().attackTime} onChange={setAttackTime}/>
        </div>
        <h2>gain</h2>
        <div>
            <Slider defaultValue={store.getState().attackGain} onChange={setAttackGain}/>
        </div>
        <h1>Decay</h1>
        <h2>time</h2>
        <div>
            <Slider defaultValue={store.getState().decayTime} onChange={setDecayTime}/>
        </div>
        <h2>gain</h2>
        <div>
            <Slider defaultValue={store.getState().decayGain} onChange={setDecayGain}/>
        </div>
        <h1>Sustain</h1>
        <h2>time</h2>
        <div>
            <Slider defaultValue={store.getState().sustainTime} onChange={setSustainTime}/>
        </div>
        <h2>gain</h2>
        <div>
            <Slider defaultValue={store.getState().sustainGain} onChange={setSustainGain}/>
        </div>

        <h1>Release</h1>
        <h2>time</h2>
        <div>
            <Slider defaultValue={store.getState().releaseTime} onChange={setReleaseTime}/>
        </div>
        <h2>gain</h2>
        <div>
            <Slider defaultValue={store.getState().releaseGain} onChange={setReleaseGain}/>
        </div>
    </div>
)
