import React from 'react'
import { StyledHeader } from './style'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectTaskMenu } from './navBarActions'
import { useDispatch } from 'react-redux'



const NavBar = state => {
    console.log('aweeeeeeeeeeeeeeeeee',state.toggleNav)
    const dispatch = useDispatch()
    const selectedTask = () => {
        dispatch(selectTaskMenu())
    }
    return (
        <>
        <StyledHeader selectedStyle={state.toggleNav} className="header">
            <spam>LOGO</spam>
            <div className='nav'>
                <Link to="/">
                    <div className="task-btn" onClick={() => selectedTask()}>
                        <a>Tarefas</a>
                    </div>
                </Link>
                <div className="user-btn">
                    <a>Usuários</a>
                </div>
            </div>
        </StyledHeader>
        </>
    )
}

const mapStateToProps = state => ({toggleNav: state.toggleNav.style})

export default connect(mapStateToProps)(NavBar)