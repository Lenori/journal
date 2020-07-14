import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 30px 0;

    @media(max-width: 1670px) {
        width: 90%;
    }

    @media(max-width: 1000px) {
        flex-direction: column;
    }    

    p {
        color: #FDF8F4;
        font-size: 17px;
        width: 60%;
        text-align: center;
        font-weight: lighter;
        margin: 30px 0 10px;

        @media(max-width: 1000px) {
            width: 90%;
        }

        span {
            color: inherit;
            font-weight: bold;
        }
    }
`;

export const Location = styled.div`
    width: 50%;
    float: left;

    @media(max-width: 1000px) {
        width: 100%;
    } 

    svg {
        position: absolute;
    }

    iframe {
        z-index: 4;
        position: relative;
    }
`;

export const Info = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 50%;
    float: left;
    flex-direction: column;
    color: #333C39;
    padding: 0 20px;

    @media(max-width: 1000px) {
        width: 100%;
        padding: 20px 0;
    } 

    h2 {
        font-family: Pattaya;
        color: inherit;
    }

    p {
        color: inherit;
        text-align: left;
        margin: 10px 0;
        width: 100%;
    }

    span {
        font-weight: bold;
    }

    button {
        background-color: #FAF11D;
        margin: 50px 0 0 0;
        border: none;
        width: 120px;
        height: 60px;
        transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
        }
    }
`;