import Container from 'react-bootstrap/esm/Container';

function Home() {

  return (
    <>
      <Container fluid className='d-flex flex-column align-items-center justify-content-center text-center' style={{ flex: 1 }}>
        <strong>¡Bienvenido a Cuenta Clara!</strong>
        <p style={{ marginBottom: '0px', color: '#8c8c8c', textWrap: 'pretty' }}>Registra tus gastos y manten al día tus finanzas 💰</p>
      </Container>
    </>
  )
}

export default Home