import styled from "styled-components";

export const StyledBackground = styled.div`
    width: 100%;
    height: 40%;
    background-color: #68c35a;
    position: fixed;
    top: 0;
    z-index: -1;
`;

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    gap: 500px;
`;

export const StyledTitle = styled.div`
    color: #4b4b4a;
    font-size: 50px;
    font-weight: 600;
    font-family: 'Courier New', Courier, monospace;
`;

export const StyledLogo = styled.img`
    width: 300px;
    height: 85px;
`;