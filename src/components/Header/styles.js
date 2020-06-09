import styled, {css} from 'styled-components';

export const Content = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    display: flex;
    align-items: left;
    justify-content: flex-end;    
    width: 100%;
    max-width: 1400px;
`;

export const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: space-between;    
`;

export const Li = styled.li`
    color: white;
    font-size: 14px;
    font-weight: lighter;
    margin: 30px 0 0 40px;

    ${props => props.mark && css`
        background-color: #FAF11D;
        color: #333C39;
        padding: 13px 20px;   
        font-weight: 500;     
        cursor: pointer;

        transition: filter 0.3s;

            &:hover {
                filter: brightness(90%);
            }
    `}
`;