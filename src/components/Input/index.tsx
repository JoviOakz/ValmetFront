import { InputWrapper, StyledInput } from "./styled.module"

interface IInput {
    label?: string;
    type?: string;
    value?: string;
    placeholder?: string;
    disabled?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<IInput> = ({ label, type, value, placeholder, disabled, onChange }) => {
    return (
        <InputWrapper>
            <label>{label}</label>
            <StyledInput type={type} value={value} placeholder={placeholder} disabled={disabled} onChange={onChange} />
        </InputWrapper>
    )
}

export default Input;