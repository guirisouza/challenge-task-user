import { tasks as data } from '../../data/data'

const INITIAL_STATE = {
    tasks: data
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'ADD_TODO':
          return state.concat([action.text])
        default:
          return state
    }
}