import { StyledButton } from "./styled.module"

interface IButton {
    children: string;
    color: string;
}

const Button: React.FC<IButton> = ({ children, color }) => {
    return (
        <StyledButton color={color}>{children}</StyledButton>
    )
}

export default Button;