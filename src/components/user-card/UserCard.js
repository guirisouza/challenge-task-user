import React from 'react'
import { StyledCardContainer } from './style'
import AvatarImage from '../../images/avatar.svg'

const UserCard = props => {
    const user = props.data.user

    return(
        <StyledCardContainer>
            <div className="user-image">
                <img src={AvatarImage} alt="avatar" />
            </div>
            <div className="user-info">
                <spam>{user.name}</spam>
                <p>{user.email.toLowerCase()}</p>
                <a>{props.data.pendingTaskCounter} tarefas pendente</a>
            </div>
        </StyledCardContainer>
    )
}

export default  UserCard