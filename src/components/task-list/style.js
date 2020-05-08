import styled from 'styled-components'

const StyledContainerTaskList = styled.div`
    height: 90%;
    background: white;
    width: 95%;

    .header-task-list {
        justify-content: space-around;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        
        p {
            width: 200px;
        }
    }

    .task-item {
        justify-content: space-around;
        height: 50px;
        width: 100%;
        display: flex;
        align-items: center;
        p {
            width: 200px;
        }
    }
`

export { StyledContainerTaskList }