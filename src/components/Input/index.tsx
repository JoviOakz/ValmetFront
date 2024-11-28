import { InputWrapper, StyledInput } from "./styled.module"

interface IInput {
    label?: string;
    type?: string;
    value?: string;
    placeholder?: string;
}

const Input: React.FC<IInput> = ({ label, type, value, placeholder }) => {
    return (
        <InputWrapper>
            <label>{label}</label>
            <StyledInput type={type} value={value} placeholder={placeholder} />
        </InputWrapper>
    )
}

export default Input;