import React from 'react'
import { useAppSelector } from '../../hooks/store'
import { useAuthActions } from '../../hooks/useAuthActions'
import { Link } from 'react-router-dom';

function User() {
  const { logoutUser } = useAuthActions();
  const auth = useAppSelector((state) => state.auth.isAuth);

  const handleLogout = () => logoutUser();

  return (
    <>
      <div className='container'>
        <h3>Panel de usuario</h3>
        <button onClick={() => handleLogout()}>Cerrar sesión</button>
        <Link to='/statistics'>Estadísticas</Link>
        <p>Auth: {auth.toString()}</p>
      </div>
    </>
  )
}

export default React.memo(User)