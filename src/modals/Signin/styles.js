import styled from 'styled-components';

import nature from '../../assets/nature.jpg';

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    background-image: url(${nature});
    background-size: cover;
    background-position: bottom;
    background-repeat: no-repeat;
`;

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 190px 0;

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

        @media(max-width: 1000px) {
        width: 90%;
        }

        a {
            color: inherit;
            font-weight: bold;
            display: block;
        }
    }

    svg {
        position: absolute;
        color: #FAF11D;
        top: 65px;
        right: 0;
        font-size: 40px;
    }
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;

    @media(max-width: 1490px) {
        width: 60%;
    }

    @media(max-width: 1000px) {
        width: 80%;
        margin: 0 0 50px;
    }

    h1 {
        font-family: Pattaya;
        font-size: 50px;
        font-weight: lighter;
        color: #FDF8F4;
        line-height: 70px;

        span {
            font-size: 80px;
            color: #FAF11D;
        }
    }
`;

export const Form = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;
    margin: 60px 0;

    @media(max-width: 1490px) {
        width: 35%;
    }

    @media(max-width: 1000px) {
        width: 80%;
    }

    form {
        width: 100%;
    }

    input {
        height: 70px;
        width: 100%;
        margin: 0 0 30px;
        background: #FDF8F4;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border: none;
        color: #333C39;
        text-align: center;
        font-size: 17px;

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