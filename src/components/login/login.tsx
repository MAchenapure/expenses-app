import { BaseSyntheticEvent, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/esm/Button";
import LoadingModal from "../modals/loading.modal";
import { login } from "../../services/users.services";
import { LoginRequestDto } from "../../dtos/login.request.dto";
import { useNavigate } from "react-router-dom";
import { Alert } from "react-bootstrap";
import { useAuthActions } from '../../hooks/useAuthActions'
import { isValidEmail } from "../../services/validation.services";
import DisconnectionError from "../errors/disconnection.error";

type alertType = {
    show: boolean,
    message: string
}

const Login = () => {
    const navigate = useNavigate();
    const { loginUser } = useAuthActions();
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [apiError, setApiError] = useState<boolean>(false);
    const [error, setError] = useState<alertType>({ show: false, message: '' });
    const [warn, setWarn] = useState<alertType>({ show: false, message: '' });
    const [loading, setLoading] = useState<boolean>(false);

    const handleEmail = (event: BaseSyntheticEvent) => {
        setEmail(event.target.value);
    }

    const handlePassword = (event: BaseSyntheticEvent) => {
        setPassword(event.target.value);
    }

    const submit = async () => {
        setError({ show: false, message: '' });
        setWarn({ show: false, message: '' });

        if (!email || !password)
            return setWarn({ show: true, message: 'Por favor, complete los datos requeridos.' });

        if (!isValidEmail(email))
            return setWarn({ show: true, message: 'El formato del email ingresado es incorrecto. Por favor, vuelva a intentarlo.' });

        setLoading(true);

        try {
            const loginResponse = await login(new LoginRequestDto(email, password));

            if (loginResponse.success) {
                loginUser(loginResponse.user);
                navigate('/');
            }
            else {
                setError({ show: true, message: 'Los datos ingresados son incorrectos. Por favor, vuelva a intentarlo.' })
            }
            setLoading(false);
        }
        catch (err) {
            setLoading(false);
            setApiError(true);
        }
    }

    return (
        <>
            {apiError ?
                <DisconnectionError /> 
                :
                <Container fluid className='d-flex flex-column align-items-center justify-content-center'>

                    <LoadingModal show={loading} />

                    <h4>Iniciar sesión 🔐</h4>

                    <Container fluid className="pt-2">
                        <Form className='d-flex flex-column'>
                            <Form.Group className="mb-2" controlId='form-email'>
                                <Form.Label>
                                    Email
                                </Form.Label>
                                <Form.Control type='email' placeholder='email@dominio.com' onChange={handleEmail} />
                            </Form.Group>
                            <Form.Group className="mb-2" controlId="form-password">
                                <Form.Label>
                                    Contraseña
                                </Form.Label>
                                <Form.Control type='password' placeholder='Ingrese su contraseña' onChange={handlePassword} />
                            </Form.Group>
                            {/* <Form.Group className="mb-2" controlId="form-password-validation">
                        <Form.Label>
                            Reingrese su contraseña
                        </Form.Label>
                        <Form.Control type='password' placeholder='Ingrese su contraseña' />
                    </Form.Group> */}

                            <Alert show={error.show} key="danger" variant="danger" className='mt-2 text-wrap'>{error.message}</Alert>

                            <Alert show={warn.show} key="warning" variant="warning" className='mt-2 text-wrap'>{warn.message}</Alert>

                            <Button className="mt-1 align-self-center" variant="secondary" onClick={submit}>Iniciar sesión</Button>
                        </Form>
                    </Container>

                </Container >
            }
        </>
    )
}

export default Login