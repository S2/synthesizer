import { createStore } from 'redux'
function counter(state = {
    soundOn : false , 
    volume : 20 , 
    frequency : 440 , 
    attackTime : 0 , 
    attackGain : 100 , 
    decayTime : 0 , 
    decayGain : 100 , 
    sustainTime : 0 , 
    sustainGain : 100 , 
    releaseTime : 0 , 
    releaseGain : 0 , 
} , action) {
    switch (action.type) {
        case 'SET_VOLUME':
            state.volume = action.volume > 100 ? 100 : action.volume
            return state
        case 'SET_FREQUENCY':
            state.frequency = action.frequency
            state.soundOn = true
            return state
        case 'KEY_UP':
            state.soundOn = false
            return state
        case 'SET_ATTACK_GAIN':
            state.attackGain = action.gain
            return state
        case 'SET_DECAY_GAIN':
            state.attackGain = action.gain
            return state
        case 'SET_SUSTAIN_GAIN':
            state.attackGain = action.gain
            return state
        case 'SET_RELEASE_GAIN':
            state.attackGain = action.gain
            return state
        case 'SET_ATTACK_TIME':
            state.attackTime = action.time
            return state
        case 'SET_DECAY_TIME':
            state.attackTime = action.time
            return state
        case 'SET_SUSTAIN_TIME':
            state.attackTime = action.time
            return state
        case 'SET_RELEASE_TIME':
            state.attackTime = action.time
            return state
        default:
            return state
    }
}
export default createStore(counter)

