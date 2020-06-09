import styled from 'styled-components';

import trees from '../../assets/trees.jpg';

export const Footer = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    background-image: url(${trees});
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;    
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 90px 0;

    h1 {
        font-family: Pattaya;
        font-size: 50px;
        font-weight: lighter;        
        color: #333C39;
        line-height: 70px;
        width: 40%;
        text-align: left;

        span {
            font-size: 80px;
        }

        @media(max-width: 1425px) {
            width: 60%;
        }
    }

    p {
        color: white;
        font-size: 17px;
        width: 100%;
        font-weight: bold;
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: flex-start;
    justify-content: space-between;
    width: 60%;
    margin: 70px 0 200px;

    @media(max-width: 1250px) {
        width: 90%;
    }

    form {
        width: 100%;
    }

    input {
        height: 60px;
        width: 70%;
        margin: 0 30px 0 0;
        background: #FDF8F4;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border: none;
        color: #333C39;
        text-align: center;
        font-size: 17px;

        @media(max-width: 920px) {
            width: 90%;
            margin: 0 30px 30px 0;
        }

        &::placeholder {
                color: #333C39;
            }
    }

    button {

        background-color: #FAF11D;
        border: none;
        width: 120px;
        height: 60px;
        transition: filter 0.3s;

            &:hover {
                filter: brightness(90%);
            }
    }
`;