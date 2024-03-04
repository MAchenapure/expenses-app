import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function AuthProtection() {
    return (
        <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center' style={{ flex: 1 }}>
            <h5 className='m-0'>Sesión no iniciada 👤</h5>
            {/* <p style={{ marginBottom: '0px', color: '#8c8c8c', textWrap: 'pretty' }}>Por favor, inicie sesión o regístrese para tener acceso a su información de cuenta.</p> */}
            <Link to='/login' className='my-3 btn btn-danger'>Iniciar sesión con Cuenta Clara</Link>
            <p className='m-0' style={{ color: '#8c8c8c', textWrap: 'pretty' }}>Todavía no tiene una cuenta? <Link to='/signup'>Regístrese ahora gratis!</Link></p>
        </Container>
    )
}

export default AuthProtection