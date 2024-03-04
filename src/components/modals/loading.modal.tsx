import Modal from "react-bootstrap/esm/Modal"

type LoadingModalProps = {
    show: boolean
}

function LoadingModal(props: LoadingModalProps) {
    const { show } = props;
    return (
        <Modal show={show} size='sm' centered>
            <Modal.Body className='py-4 text-center'>
                Cargando...
            </Modal.Body>
        </Modal>
    )
}

export default LoadingModal