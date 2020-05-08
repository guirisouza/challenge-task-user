import { combineReducers } from 'redux'
import taskListReducer from '../components/task-list/taskListReducer'
import usersReducer from '../components/user-card/userCardReducer'
import navBarReducer from '../components/navbar/navBarReducer'

const rootReducer = combineReducers({
    tasksList: taskListReducer,
    usersData: usersReducer,
    toggleNav: navBarReducer
})

export default rootReducer