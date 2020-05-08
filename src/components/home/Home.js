import React from 'react'
import NavBar from '../navbar/NavBar'
import TaskList from '../task-list/TaskList'
import { StyledContent, StyledStructure } from './style'

const Home = () => {
    return (
        <>
            <StyledStructure>
                <NavBar/>
                <StyledContent className="content">
                    <TaskList/>
                </StyledContent>
            </StyledStructure>
        </>
    )
}

export default Home