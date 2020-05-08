import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { StyledContainerTaskList } from './style'


const TaskList = state => {

    const userQuery = (users, task) => {
        let userData = {}
        users.map(user =>{
            if(user.id === task.userId) {
                userData = user
            }
        })
        return userData
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
                    let status = ''
                    task.completed 
                        ? status = 'Feito'
                        : status = 'Pendente'
                    return (
                        <div key={index} className="task-item">
                            <p>{task.title}</p>
                            <Link to={{pathname: '/user-detail', state:{user: user}}}>
                                <p>{user.name}</p>
                            </Link >
                            <p>{status}</p>
                        </div>
                    )
                })
            }

        </StyledContainerTaskList>
        </>
    )
}

const mapStateToProps = state => ({tasks: state.tasksList.tasks, users: state.usersData.users})

export default connect(mapStateToProps)(TaskList)