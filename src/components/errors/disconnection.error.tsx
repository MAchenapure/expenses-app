import Container from 'react-bootstrap/esm/Container'
import Image from 'react-bootstrap/esm/Image'
import disconnectImg from '../../assets/disconnect.png'

function DisconnectionError() {
    return (
        <Container className='d-flex flex-column justify-content-center align-items-center'>
            <Image src={disconnectImg} width='150px' />
            <span className='mt-3'>Ocurrió un problema al obtener sus datos. Por favor, intente de nuevo.</span>
        </Container>
    )
}

export default DisconnectionError