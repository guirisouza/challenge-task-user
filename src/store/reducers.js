import { combineReducers } from 'redux'
import taskListReducer from '../components/task-list/taskListReducer'
import usersReducer from '../components/user-card/userCardReducer'

const rootReducer = combineReducers({
    tasksList: taskListReducer,
    usersData: usersReducer
})

export default rootReducer