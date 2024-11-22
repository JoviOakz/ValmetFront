import styled from "styled-components";

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

export const StyledInput = styled.input`
    padding: 0.5rem;
    font-size: 1.1rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    outline: none;
    width: 100%; 
    background-color: #f9f9f9;
    color: #333;
    transition: border-color 0.3s ease;

    &:focus {
        border-color: grey;
        box-shadow: 0 0 5px rgba(128, 128, 128, 0.3);
        background-color: #fff;
    }
`;