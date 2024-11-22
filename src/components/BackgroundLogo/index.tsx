import { StyledBackground, HeaderWrapper, StyledTitle, StyledLogo } from "./styled.module";
import Logo from "/Logo.png";

const BackgroundLogo = () => {
    return (
        <StyledBackground>
            <HeaderWrapper>
                <StyledTitle>Orçamento</StyledTitle>
                <StyledLogo src={Logo} />
            </HeaderWrapper>
        </StyledBackground>
    )
}

export default BackgroundLogo;