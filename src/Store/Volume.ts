import { createStore } from 'redux'
function counter(state = {volume : 50} , action) {
    switch (action.type) {
        case 'SET_VOLUME':
            state.volume = action.volume > 100 ? 100 : action.volume
            return state
        default:
            return state
    }
}
export default createStore(counter)

