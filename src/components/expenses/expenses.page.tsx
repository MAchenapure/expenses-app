import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/esm/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import ExpenseItemList from './expense.item.list';
import { getUserExpenses } from '../../services/expenses.services';
import { Expense } from '../../entities/expense.entity';
import LoadingModal from '../modals/loading.modal';
import DisconnectionError from '../errors/disconnection.error';

function Expenses() {
  const [fetching, setFetching] = useState<boolean>(false);
  const [expensesData, setExpensesData] = useState<Expense[]>();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("65c452ec60fbd698849a42f7");

  useEffect(() => {
    if (!fetching) {
      setFetching(true);
      setLoading(true);

      getUserExpenses(userId)
        .then(expenses => setExpensesData(expenses))
        .catch(err => {
          setError(true);
          console.log(err);
        })
        .finally(() => {
          setLoading(false);
          setFetching(false)
        });
    }
  }, []);

  return (
    <>
      <Container fluid className='px-0 text-center'>

        <LoadingModal show={loading} />

        <h3>Registros de tus gastos</h3>

        {error ?
          <DisconnectionError />
          :
          <ListGroup className='text-start pt-2'>
            {expensesData?.map(expense => <ExpenseItemList key={expense.id} date={expense.date} description={expense.description} value={expense.value} />)}
          </ListGroup>
        }
      </Container>
    </>
  )
}

export default React.memo(Expenses)