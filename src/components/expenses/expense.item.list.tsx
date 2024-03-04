import { Col, Row } from 'react-bootstrap';
import ListGroupItem from 'react-bootstrap/ListGroupItem';

function ExpenseItemList(props: { date: Date, description: string, value: number }) {
    const { date, description, value } = props;

    const formatDate = (date: Date): string => {
        const newDate = new Date(date);
        return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`;
    }

    const formatValue = (value: number): string => {
        const parts = value.toFixed(2).split('.');
        const integerPart = parts[0];
        const decimalPart = parts[1];

        let formattedIntegerPart = '';
        for (let i = integerPart.length - 1, j = 0; i >= 0; i--, j++) {
            if (j > 0 && j % 3 === 0) {
                formattedIntegerPart = '.' + formattedIntegerPart;
            }
            formattedIntegerPart = integerPart[i] + formattedIntegerPart;
        }

        return formattedIntegerPart + ',' + decimalPart;
    }

    return (
        <ListGroupItem className='border-1 py-2'>
            <Row>
                <Col className='ps-3'>
                    <Row>
                        {description}
                    </Row>
                    <Row style={{ fontSize: '14px', fontStyle: 'italic' }}>
                        {formatDate(date)}
                    </Row>
                </Col>
                <Col xs="auto" className="d-flex align-items-center text-start">
                    $ {formatValue(value)}
                </Col>
            </Row>

        </ListGroupItem>
        // <IonItem>
        //     <IonGrid className='item-grid'>
        //         <IonRow>
        //             <IonCol className='item-col'>
        //                 <IonLabel className='expense-item-description'>{description}</IonLabel>
        //                 <IonRow>
        //                     <IonLabel className='expense-item-date'>{formatDate(date)}</IonLabel>
        //                 </IonRow>
        //             </IonCol>
        //             <IonCol size='auto' className="ion-align-self-center item-col">
        //                 <IonLabel className='expense-item-value'>$ {formatValue(value)}</IonLabel>
        //             </IonCol>
        //         </IonRow>
        //     </IonGrid>
        // </IonItem>
    )
}

export default ExpenseItemList