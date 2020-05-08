import React from 'react'
import NavBar from '../navbar/NavBar'
import {StyledStructure, StyledContent} from '../home/style'
import UserCard from '../user-card/UserCard'


const UserDetail = props => {
    const data = {
        user: props.location.state.user,
        pendingTaskCounter: props.location.state.pendingTaskCounter
    }
    return(
        <>
            <StyledStructure>
                <NavBar/>
                <StyledContent className="content">
                    <UserCard data={data}/>
                </StyledContent>
            </StyledStructure>
        </>
    )
}

export default UserDetail