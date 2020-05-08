import React from 'react'
import NavBar from '../navbar/NavBar'
import {StyledStructure, StyledContent} from '../home/style'
import UserCard from '../user-card/UserCard'


const UserDetail = props => {
    const data = props.location.state.user
    return(
        <>
            <StyledStructure>
                <NavBar/>
                <StyledContent className="content">
                    <UserCard user={data}/>
                </StyledContent>
            </StyledStructure>
        </>
    )
}

export default UserDetail