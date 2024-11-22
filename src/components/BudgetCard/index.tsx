import { CardWrapper, StyledButtons, StyledDates, StyledDescription, StyledInformation } from "./styled.module";
import Button from "../Button";
import Input from "../Input";

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
                <Button color="red">Cancelar</Button>
                <Button color="#68c35a">Confirmar</Button>
            </StyledButtons>
        </CardWrapper>
    )
}

export default BudgetCard;