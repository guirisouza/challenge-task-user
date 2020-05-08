import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { StyledContainerTaskList, StyledTaskItem } from './style'
import { selectUserMenu } from '../navbar/navBarActions'


const TaskList = state => {

    const styleStatus = {
        pending: {
            bg: "#F6FAF0",
            color: "#A2C85F"
        },
        done: {
            bg: "#FCF2F2",
            color: "#DE6767" 
        }
    }

    const userQuery = (users, task) => {
        let userData = {}
        users.map(user =>{
            if(user.id === task.userId) {
                userData = user
            }
        })
        return userData
    }


    const pendingTasks = (tasks, userId) => {
        let counter = 0
        tasks.map(task => {
            if(task.userId === userId && task.completed === false) {counter++} 
        }) 
        return counter
    }

    const dispatch = useDispatch()
    const selectedUser = () => {
        dispatch(selectUserMenu())
    }

    return(
        <>
        <StyledContainerTaskList>
            <div className="header-task-list">
                <p>TAREFA</p>
                <p>RESPONSÁVEL</p>
                <p>STATUS</p>
            </div>
            {
                state.tasks.map((task, index) => {
                    let user = userQuery(state.users, task)
                    let pendingTaskCounter = pendingTasks(state.tasks, user.id)
                    let status = ''
                    task.completed 
                        ? status = 'Feito'
                        : status = 'Pendente'
                    return (
                        <StyledTaskItem style={{styleStatus: styleStatus, status: status}} key={index}>
                            <p>{task.title}</p>
                            <Link onClick={() => selectedUser()} to={{pathname: '/user-detail', state:{user: user, pendingTaskCounter: pendingTaskCounter}}}>
                                <p>{user.name}</p>
                            </Link >
                            <div className="done"><p>{status}</p></div>
                        </StyledTaskItem>
                    )
                })
            }

        </StyledContainerTaskList>
        </>
    )
}

const mapStateToProps = state => ({tasks: state.tasksList.tasks, users: state.usersData.users})

export default connect(mapStateToProps)(TaskList)