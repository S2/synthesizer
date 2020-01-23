import { createStore } from 'redux'
function counter(state = {volume : 20 , frequency : 440} , action) {
    switch (action.type) {
        case 'SET_VOLUME':
            state.volume = action.volume > 100 ? 100 : action.volume
            return state
        case 'SET_FREQUENCY':
            state.frequency = action.frequency
            return state
        default:
            return state
    }
}
export default createStore(counter)

