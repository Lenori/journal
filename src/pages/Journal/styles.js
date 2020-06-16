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
`;

export const Title = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin: 0 0 60px 0;

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

    p {
        color: #FDF8F4;
        font-size: 17px;
        width: 60%;
        text-align: center;
        font-weight: lighter;

        @media(max-width: 1000px) {
        width: 90%;
        }

        span {
            font-weight: bold;
        }
    }
`;

export const Items = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 30px auto;
`;

export const Leg = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    width: 80%;
    max-width: 1400px;
    background-color: #333C39;
    padding: 30px;
    margin: 0 auto 0;

    @media(max-width: 780px) {
        flex-direction: column;
    }
`;

export const Leginfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;

    @media(max-width: 780px) {
        width: 100%;
    }

    h1 {
        font-family: Pattaya;
        font-size: 20px;
        font-weight: lighter;
        color: #FDF8F4;
        text-align: left;
    }

    section {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 0;

        @media(max-width: 1200px) {
            width: 90%;
        }

        @media(max-width: 780px) {
            width: 100%;
        }

        p {
            font-size: 17px;
            font-weight: lighter;
            color: white;
            text-align: left;

            span {
                margin: 0 0 0 8px;
            }
        }
    }
`;

export const Legactions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 40%;

    @media(max-width: 1200px) {
        flex-direction: column;
    }

    @media(max-width: 780px) {
        flex-direction: row;
        width: 100%;
        margin: 50px 0 0;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 100px;
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

        @media(max-width: 1200px) {
        margin: 20px 0;
        }

        @media(max-width: 780px) {
        margin: 0 0;
        }
    }
`;

export const Entry = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;    
    width: 80%;
    max-width: 1200px;
    color: #333C39;
    padding: 30px;
    border-left: 2px solid #333c39;
    margin: 0;

    @media(max-width: 780px) {
        flex-direction: column;
    }
`;

export const Entryinfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    @media(max-width: 780px) {
        width: 100%;
    }

    h1 {
        font-family: Pattaya;
        font-size: 20px;
        font-weight: lighter;
        text-align: left;
    }

    section {
        display: flex;
        width: 50%;
        align-items: center;
        justify-content: space-between;
        margin: 10px 0 0;

        @media(max-width: 1200px) {
            width: 90%;
        }

        @media(max-width: 780px) {
            width: 100%;
        }

        p {
            font-size: 17px;
            font-weight: lighter;
            text-align: left;

            span {
                margin: 0 0 0 8px;
            }
        }
    }
`;

export const Entrytext = styled.p`
    font-size: 17px;
    font-weight: lighter;
    text-align: left;
    margin: 20px 0 0;
`;

export const Share = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: space-between;
    width: 60%;
    margin: 50px auto;

    @media(max-width: 1000px) {
        width: 80%;
        margin: 0 0 50px;
    }

    h1 {
        font-family: Pattaya;
        font-size: 50px;
        font-weight: lighter;
        color: #333C39;
        line-height: 70px;

        span {
            font-size: 80px;
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

export const Formsave = styled.div`
    display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
    justify-content: center;
    width: 60%;
    margin: 60px auto;

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
        background: #333c39;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        border: none;
        color: #fdf8f4;
        text-align: left;
        font-size: 17px;
        padding: 0 30px;

        &::placeholder {
                color: #fdf8f4;
            }
    }

    textarea {
        height: 300px;
        width: 100%;
        margin: 0 0 30px;
        background: #333c39;
        box-shadow: 0px 4px 10px rgba(0,0,0,0.1);
        border: none;
        color: #fdf8f4;
        text-align: left;
        font-size: 17px;
        padding: 25px 30px;
        font-family: Roboto slab;

        &::placeholder {
                color: #fdf8f4;
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