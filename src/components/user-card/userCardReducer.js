import { users as data } from '../../data/data'

const INITIAL_STATE = {
    users: data
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
          return state
    }
}