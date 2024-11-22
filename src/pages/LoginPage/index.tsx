import { StyledLoginPage, TemporaryLogo } from "./styled.module";
import LoginForm from "../../components/LoginForm";
import Logo from "/Logo.png";

const LoginPage = () => {
    return (
        <StyledLoginPage>
            <LoginForm />
            <TemporaryLogo src={Logo} />
        </StyledLoginPage>
    )
}

export default LoginPage;