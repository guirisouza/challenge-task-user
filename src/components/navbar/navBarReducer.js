const INITIAL_STATE = {
    style: {tasks: {selected: true}, users: {selected: false}}
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'SELECTED_TASKS':
            return {...state, style: {tasks: {selected: action.payload}, users: {selected: false}}}
        case 'SELECTED_USERS':
            return {...state, style: {tasks: {selected: false}, users: {selected: action.payload}}}
        default:
          return state
    }
}