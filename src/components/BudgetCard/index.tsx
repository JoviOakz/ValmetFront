import { CardWrapper, StyledButtons, StyledDates, StyledDescription, StyledInformation } from "./styled.module";
import Button from "../Button";
import Input from "../Input";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

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
                <Link to={'/'}>
                    <Button
                        color="#68c35a"
                        onClick={() => toast.success("Enviado com sucesso!", {
                            position: "top-right",
                            autoClose: 3000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                        })}
                    >
                        Confirmar
                    </Button>
                </Link>
            </StyledButtons>
        </CardWrapper>
    )
}

export default BudgetCard;