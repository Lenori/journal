import styled, {css} from 'styled-components';

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
    padding: 60px 0;

    @media(max-width: 1670px) {
        width: 90%;
    }

    @media(max-width: 1000px) {
        flex-direction: column;
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
    justify-content: space-between;
    width: 75%;
    margin: 60px 0;

    @media(max-width: 1120px) {
        width: 90%;
    }

    form {
        display: flex;
        align-items: center;
        text-align: center;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;

        section {
            width: 48%;
            position: relative;

            input {
                width: 100%;
                padding: 0 60px;
            }

            svg {
                position: absolute;
                z-index: 1000;
                top: 25%;
                left: 20px;

                &:last-child {
                    top: 25%;
                    left: 105%;
                }
            }
        }
    }

    input {
        height: 70px;
        width: 48%;
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
    width: 100%;
    height: 60px;
    margin: 0 0 30px;
    transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
        }
    }
`;

export const Leg = styled.section`
    width: 48%;

    ${props => props.half && css`        
        width: 22% !important;
    `}
`;

export const Formsave = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin: 60px 0;

    @media(max-width: 1120px) {
        width: 90%;
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
        text-align: left;
        font-size: 17px;
        padding: 0 30px;

        &::placeholder {
                color: #333C39;
            }
    }

    textarea {
        height: 300px;
        width: 100%;
        margin: 0 0 30px;
        background: #FDF8F4;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
        border: none;
        color: #333C39;
        text-align: left;
        font-size: 17px;
        padding: 25px 30px;
        font-family: Roboto slab;

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

export const Share = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin: 90px auto;

    @media(max-width: 1000px) {
        width: 80%;
        margin: 0 0 50px;
    }

    h1 {
        font-family: Pattaya;
        font-size: 50px;
        font-weight: lighter;
        color: white;
        line-height: 70px;

        span {
            font-size: 80px;
            color: #FAF11D;
        }
    }

    section {
        display: flex;
        align-items: center;
        width: 100%;
        max-width: 200px;
        justify-content: space-between;
        margin: 30px auto 0;
    }
`;