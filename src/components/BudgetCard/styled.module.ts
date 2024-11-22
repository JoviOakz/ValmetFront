import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 70%;
    height: 75%;
    border: 3px solid green;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    flex-direction: column;
    margin-top: 8rem;
    gap: 4rem;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`;

export const StyledInformation = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    & > * {
        flex: 1;
        max-width: 100%;
    }
`;

export const StyledDescription = styled.div`
    width: 80%;
`;

export const StyledDates = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    gap: 1rem;

    & > * {
        flex: 1;
        max-width: 100%;
    }
`;

export const StyledButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: end;
    margin-right: 205px;
    gap: 25px
`;