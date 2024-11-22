import { StyledForm, StyledInputs, StyledLogo } from "./styled.module";
import { StyledButtons } from "../BudgetCard/styled.module";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import Input from "../Input";
import Button from "../Button";



const LoginForm = () => {
    return (
        <StyledForm>
            <StyledLogo src={Logo} />
            
            <StyledInputs>
                <Input label="Login" />
                <Input label="Senha" />
            </StyledInputs>
            
            <StyledButtons>
                <Link to={'/budget'}><Button color="#68c35a">Entrar</Button></Link>
            </StyledButtons>
        </StyledForm>
    )
}

export default LoginForm;