import { useNavigate } from "react-router-dom"
import Button from "../../components/button"
import MainLayout from "../../layouts/mainLayout"
import { ConfirmationContainer, Img, Title } from "./style"

const Confirmation = () => {
    const navigate = useNavigate()

    const handleBack = () => {
        navigate('/')
    }

    return (
        <MainLayout>
            <ConfirmationContainer>
                <Title>
                    Compra realizada com sucesso!
                </Title>
                <Img src={require('../../assets/imgs/confirmation.png')} />
                <Button onClick={handleBack} text='VOLTAR' />
            </ConfirmationContainer>
        </MainLayout>
    )
}

export default Confirmation