import { StyledBudgetPage } from "./styled.module";
import BudgetCard from "../../components/BudgetCard";
import BackgroundLogo from "../../components/BackgroundLogo";

const BudgetPage = () => {
    return (
        <StyledBudgetPage>
            <BackgroundLogo />
            <BudgetCard />
        </StyledBudgetPage>
    )
}

export default BudgetPage;