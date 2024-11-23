import { StyledForm, StyledInputs, StyledLogo } from "./styled.module";
import { StyledButtons } from "../BudgetCard/styled.module";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Logo from "/Logo.png";
import Input from "../Input";
import Button from "../Button";



const LoginForm = () => {
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
        e.preventDefault();

        try {
            const response = await axios.post(`https://backend-stackets.onrender.com/user/login`, {
                email: email,
                password: password,
            });

            const { token } = response.data;

            localStorage.setItem('token', token);

            const decodedToken = JSON.parse(atob(token.split('.')[1]));
            localStorage.setItem('role', decodedToken.role);
            localStorage.setItem('name', decodedToken.name);

            console.log(response)
            navigate('/home')
        } catch (error: unknown) {
            console.log('An unexpected error occurred. Please try again later.');
            console.log(error);

            if (axios.isAxiosError(error)) {
                if (error.response && error.response.status === 400) {
                    toast.error('EDV ou senha inválidos');
                }
            } else {
                toast.error('Ocorreu um erro inesperado.');
            }
        }
    }

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