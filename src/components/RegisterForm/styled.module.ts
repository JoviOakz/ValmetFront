import styled from "styled-components";

export const StyledForm = styled.form`
    width: 40%;
    max-width: 400px;
    padding: 2rem;
    border-radius: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

export const StyledLogo = styled.img`
    width: 150px;
    margin-bottom: 1rem;
`;

export const StyledTitle = styled.h1`
    font-size: 24px;
    color: #4b4b4a;
    margin-bottom: 1.5rem;
    font-weight: bold;
`;

export const StyledInputs = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const StyledButtons = styled.div`
    width: 70%;
    display: flex;
    justify-content: center;
    margin-top: 20px;
    gap: 30px
`;