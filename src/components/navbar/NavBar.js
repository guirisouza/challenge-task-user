import React from 'react'
import { StyledHeader } from './style'

const NavBar = () => {
    return (
        <>
        <StyledHeader className="header">
            <spam>LOGO</spam>
            <div>
                <a>Tarefas</a>
                <a>Usuários</a>
            </div>
        </StyledHeader>
        </>
    )
}

export default NavBar