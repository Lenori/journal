import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;    
    width: 80%;
    max-width: 1400px;
    margin: 0 auto;
    padding: 90px 0 0;

    @media(max-width: 1670px) {
        width: 90%;
    }

    h1 {
        font-family: Pattaya;
        font-size: 50px;
        font-weight: lighter;        
        color: #333C39;
        line-height: 70px;
        width: 40%;
        text-align: center;

        span {
            font-size: 80px;
        }

        @media(max-width: 1425px) {
            width: 60%;
        }
    }

    p {
        color: #333C39;
        font-size: 17px;
        width: 24%;
        text-align: center;
        margin: 30px auto 0;

        @media(max-width: 1425px) {
            width: 40%;
        }

        @media(max-width: 1000px) {
        width: 60%;
        }
    }
`;

export const Items = styled.div`
    display: flex;
    align-items: flex-start;
    justify-content: space-between;    
    width: 100%;
    padding: 100px 0 90px;

    @media(max-width: 900px) {
        flex-direction: column;
    }
`;

export const Item = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;    
    width: 33.33%;
    margin: 0 auto;

    @media(max-width: 900px) {
        width: 80%;
        margin: 0 auto 50px;
    }

    p {
        width: 54%;

        @media(max-width: 900px) {
            width: 80%;
        }
    }
`;