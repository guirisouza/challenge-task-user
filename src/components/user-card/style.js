import styled from 'styled-components'

const StyledCardContainer = styled.div`
    display: flex;
    height: auto;
    padding: 25px 0 25px 25px;
    align-self: start;
    margin-top: 40px;
    background: white;
    width: 95%;
    border-radius: 5px;
    align-items: center;

    .user-image {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 145px;
        height: 145px;
        background:  #F0F0F0;
        border-radius: 50%;

        img {
            max-width: 50%;
        }
    }

    .user-info {
        margin-left: 25px;
    }


`

export { StyledCardContainer }