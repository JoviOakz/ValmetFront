import { darken } from "polished";
import styled from "styled-components";

export const StyledButton = styled.button`
    width: 100px;
    height: 32px;
    background-color: ${(props) => props.color || "gray"};
    color: white;
    border: none;
    font-size: 16px;
    font-weight: 600;
    border-radius: 15px;
    transition: background-color 0.3s ease;
    cursor: pointer;

    &:hover {
        background-color: ${(props) => darken(0.1, props.color || "gray")}; 
    }
`;