import styled from 'styled-components'

const StyledHeader = styled.header`
    
    background: white;
    width: 100%;
    height: 4.5vh;
    display: grid;
    padding: 15px 0 15px 0;
    grid-template-columns: 1fr auto;
    align-items: center;
    border-bottom: 1px solid #F0F0F0;

    spam {
        margin-left: 70px;
        width: auto;
    }

    .nav {
        display: flex;
        margin-right: 1120px;

        .user-btn {
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            width: 90px;
            height: 35px;
            background: ${
                props => props.selectedStyle.users.selected === true
                    ? '#EEF1F8'
                    : ''
            };
            
            a {
                color: #0C3CA4;
            }
        }

        .task-btn {
            display: flex;
            cursor: pointer;
            align-items: center;
            justify-content: center;
            border-radius: 5px;
            width: 90px;
            height: 35px;
            margin-left: 25px;
            background: ${
                props => props.selectedStyle.tasks.selected === true
                    ? '#EEF1F8'
                    : 'none'
            };
            
            a {
                color: #0C3CA4;
            }
        }

        a {
            text-decoration: none;
            margin: 0 30px 0 30px;        
        }
    }

`

export { StyledHeader }