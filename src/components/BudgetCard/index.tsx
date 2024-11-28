import { CardWrapper, StyledButtons, StyledDates, StyledDescription, StyledInformation } from "./styled.module";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";

const BudgetCard = () => {
    return (
        <CardWrapper>
            <StyledInformation>
                <Input label="Cliente" />
                <Input label="Desenho" />
                <Input label="Quantidade" type="number" />
            </StyledInformation>

            <StyledDescription>
                <Input label="Descrição" />
            </StyledDescription>

            <StyledDates>
                <Input label="Data da Cotação" type="date" />
                <Input label="Prazo de Fabricação" type="date" />
                <Input label="Validade da Cotação" type="date" />
            </StyledDates>

            <StyledButtons>
                <Link to={'/'}>
                    <Button color="red">Cancelar</Button>
                </Link>
                <Button color="#68c35a">Confirmar</Button>
            </StyledButtons>
        </CardWrapper>
    )
}

export default BudgetCard;