import styled from 'styled-components'

const StyledContainerTaskList = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    height: 90%;
    background: white;
    width: 80%;
    border-radius: 5px;

    .header-task-list {
        justify-content: space-around;
        height: 50px;
        width: 95%;
        display: flex;
        align-items: center;
        
        p {
            width: 200px;
            color: #0C3CA4;
            font-family: helvetica;
            font-weight: 900;
        }
    }
`

const StyledTaskItem = styled.div`
    justify-content: space-around;
    border-bottom: 1px solid #F0F0F0;
    height: 50px;
    width: 95%;
    display: flex;
    align-items: center;
    p {
        width: 200px;
    }

    .done {
        display: flex;
        align-items: center;
        justify-content: center;
        background: ${props => 
            props.style.status === "Pendente"
                ? props.style.styleStatus.pending.bg
                : props.style.styleStatus.done.bg
        };
        width: 90px;
        height: 35px;
        border-radius: 5px;
        margin-right: 110px;

        p {
            display: block;
            width: auto;
            color: ${props => 
                props.style.status === "Pendente"
                    ? props.style.styleStatus.pending.color
                    : props.style.styleStatus.done.color
            };;
        }
`

export { StyledContainerTaskList, StyledTaskItem }