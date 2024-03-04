import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/home/home';
import Statistics from './components/statistics/statistics';
import User from './components/user/user';
import Header from './components/header/header';
import Expenses from './components/expenses/expenses.page';
import BottomNavbar from './components/bottom.navbar/bottom.navbar';
import { Container } from 'react-bootstrap';
import AuthProtectionRouter from './components/auth.protection/authProtectionRouter';
import Login from './components/login/login';

function App() {
  return (
    <>
      <BrowserRouter>

        <Header />

        <Container id='main-container' className='d-flex py-3' style={{ flex: 1 }}>
          <Routes>

            <Route path='/' element={
              <Home />
            } />

            <Route path='/expenses' element={
              <AuthProtectionRouter>
                <Expenses />
              </AuthProtectionRouter>
            } />

            <Route path='/login' element={
              <Login />
            } />

            <Route path='/statistics' element={
              <AuthProtectionRouter>
                <Statistics />
              </AuthProtectionRouter>
            } />

            <Route path='/user' element={
              <AuthProtectionRouter>
                <User />
              </AuthProtectionRouter>
            } />

          </Routes>
        </Container>

        <BottomNavbar />

      </BrowserRouter>
    </>
  )
}

export default App
