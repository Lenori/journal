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

export const Items = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin: 40px 0 0;
`;

export const Trip = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background-color: rgba(31, 40, 41, 0.7);
    padding: 30px;
    margin: 0 0 30px 0;

    @media (max-width: 1020px) {
        flex-direction: column;
    }
`;

export const Tripinfo = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    width: 40%;

    @media (max-width: 1020px) {
        width: 100%;
        margin: 0 0 20px;
    }

    @media (max-width: 750px) {
        margin: 0 0 40px;
    }

    h1 {
        font-family: Pattaya;
        font-size: 20px;
        font-weight: lighter;
        color: #FDF8F4;
        text-align: left;
    }

    p {
        font-size: 17px;
        font-weight: lighter;
        color: #FDF8F4;
        width: 100%;
        text-align: left;
    }
`;

export const Tripactions = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 60%;

    @media (max-width: 1200px) {
        width: 50%;
    }

    @media (max-width: 1020px) {
        width: 100%;
    }

    section {
        display: flex;
        align-items: center;
        justify-content: space-between;
        min-width: 100px;

        @media (max-width: 1200px) {
            flex-direction: column;
            min-height: 100px;
        }

        @media (max-width: 1020px) {
            flex-direction: row;
        }

        @media (max-width: 750px) {
            flex-direction: column;
        }
    }

    button {
    background-color: #FAF11D;
    border: none;
    width: 120px;
    height: 60px;
    margin: 0 10px;
    transition: filter 0.3s;

        &:hover {
            filter: brightness(90%);
        }

        @media (max-width: 1200px) {
            margin: 10px 0;
        }

        @media (max-width: 1020px ) {
            margin: 0 10px;
        }

        @media (max-width: 750px) {
            margin: 10px 0;
        }
    }
`;