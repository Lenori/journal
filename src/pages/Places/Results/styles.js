import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
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

export const Categories = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25%;
    flex-direction: column;

    @media(max-width: 1000px) {
        flex-direction: row;
        padding: 0 20px 50px;
        justify-content: space-between;
        width: 100%;
    }    

`;

export const Category = styled.p`
    color: #333C39 !important;
    text-align: left !important;
    cursor: pointer;
    width: auto !important;

    &:hover {
        font-weight: bold !important;
    }

    ${props => props.selected && css`
        font-weight: bold !important;
    `}
`;

export const Items = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 75%;
    flex-wrap: wrap;
`;

export const Item = styled.div`
    display: none;
    justify-content: flex-start;
    align-items: flex-start;
    width: 25%;
    flex-direction: column;
    color: #333C39;
    padding: 20px;
    margin: 0 0 20px 0;

    ${props => props.show && css `
        display: flex;
    `}

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