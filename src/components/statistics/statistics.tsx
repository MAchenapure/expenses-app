import { useAppSelector } from '../../hooks/store';

function Statistics() {
  const auth = useAppSelector(state => state.auth.isAuth);
  
  return (
    <div className='container'>
      <h3>Estadísticas de tus gastos</h3>
      <p>Auth: {auth.toString()}</p>
    </div>
  )
}

export default Statistics