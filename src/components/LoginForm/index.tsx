import { StyledButtons, StyledForm, StyledInputs, StyledLogo, StyledTitle } from "./styled.module";
import { Link } from "react-router-dom";
import Logo from "/Logo.png";
import Input from "../Input";
import Button from "../Button";

const LoginForm = () => {
    return (
        <StyledForm>
            <StyledLogo src={Logo} />
            <StyledTitle>Bem-vindo!</StyledTitle>

            <StyledInputs>
                <Input label="Login" type="text" placeholder="Digite seu login" />
                <Input label="Senha" type="password" placeholder="Digite sua senha" />
            </StyledInputs>

            <StyledButtons>
                <Link to={'/budget'}>
                    <Button color="#68c35a">Entrar</Button>
                </Link>
            </StyledButtons>

            <StyledButtons>
                <Link to={'/register'}>
                    <Button color="#4b4b4a">Criar Conta</Button>
                </Link>
            </StyledButtons>
        </StyledForm>
    );
}

export default LoginForm;