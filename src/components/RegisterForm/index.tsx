import { StyledButtons, StyledForm, StyledInputs, StyledLogo, StyledTitle } from "./styled.module";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import Logo from "/Logo.png";
import Input from "../Input";
import Button from "../Button";

const RegisterForm = () => {
    return (
        <StyledForm>
            <StyledLogo src={Logo} />
            <StyledTitle>Criar Conta</StyledTitle>

            <StyledInputs>
                <Input label="Nome Completo" type="text" placeholder="Digite seu nome" />
                <Input label="E-mail" type="email" placeholder="Digite seu e-mail" />
                <Input label="Senha" type="password" placeholder="Digite sua senha" />
                <Input label="Confirmar Senha" type="password" placeholder="Confirme sua senha" />
            </StyledInputs>

            <StyledButtons>
                <Link to={'/'}>
                    <Button
                        color="#68c35a"
                        onClick={() => toast.success("Solicitação de cadastro enviado com sucesso!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })}
                    >
                        Registrar
                    </Button>
                </Link>
                <Link to={'/'}>
                    <Button color="#4b4b4a">Cancelar</Button>
                </Link>
            </StyledButtons>
        </StyledForm>
    );
}

export default RegisterForm;