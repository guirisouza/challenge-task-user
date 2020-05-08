import styled from 'styled-components'

const StyledHeader = styled.header`
    grid-area: header;
    background: white;
    width: 100%;
    height: 3vh;
    display: grid;
    padding: 15px 0 15px 0;
    grid-template-columns: 1fr auto;
    align-items: center;

    spam {
        margin-left: 70px;
        width: auto;
    }

    div {
        margin-right: 1120px;
        a {
            margin: 0 30px 0 30px;        
        }
    }

`

export { StyledHeader }