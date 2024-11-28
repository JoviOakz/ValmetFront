import { StyledButton } from "./styled.module"

interface IButton {
    children: string;
    color: string;
    onClick?: () => void;
}

const Button: React.FC<IButton> = ({ children, color, onClick }) => {
    return (
        <StyledButton color={color} onClick={onClick}>{children}</StyledButton>
    )
}

export default Button;