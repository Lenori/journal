import styled from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const Items = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 100%;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25%;
    flex-direction: column;
    color: #333C39;
    padding: 20px;
    margin: 0 0 20px 0;

    @media(max-width: 1300px) {
        width: 33.33%;
    }

    @media(max-width: 900px) {
        width: 50%;
    }

    @media(max-width: 500px) {
        width: 100%;
    }

    h2 {
        font-family: Pattaya;
        color: inherit;
        cursor: pointer;

        &:hover {
            color: #5f5f5f;
        }
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
`;