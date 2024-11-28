import { StyledLoginPage, Logo } from "./styled.module";
import LoginForm from "../../components/LoginForm";
import Image from "/Login.webp";

const LoginPage = () => {
    return (
        <StyledLoginPage>
            <LoginForm />
            <Logo src={Image} />
        </StyledLoginPage>
    )
}

export default LoginPage;