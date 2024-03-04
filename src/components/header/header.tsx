import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';

function Header() {
    return (
        <>
            <Navbar id='header' className='border-bottom border-2'>
                <Container>
                    <Navbar.Text>Cuenta Clara</Navbar.Text>
                </Container>
            </Navbar>
            {/* <IonHeader>
                <IonToolbar>
                    <IonTitle>CuentaClara</IonTitle>
                </IonToolbar>
            </IonHeader> */}

        </>
    )
}

export default React.memo(Header);