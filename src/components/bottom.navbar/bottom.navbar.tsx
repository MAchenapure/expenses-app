import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/esm/Navbar'
import BottomNavbarTab from './bottom.navbar.tab'
import houseImg from '../../assets/house.svg'
import expensesImg from '../../assets/expenses.svg'
import statisticsImg from '../../assets/statistics.svg'
import userImg from '../../assets/user.svg'


const navigationTabs = [
    {
        label: 'Inicio',
        href: '/',
        icon: houseImg
    },
    {
        label: 'Gastos',
        href: '/expenses',
        icon: expensesImg
    },
    {
        label: 'Estadísticas',
        href: '/statistics',
        icon: statisticsImg
    },
    {
        label: 'Usuario',
        href: '/user',
        icon: userImg
    }
]


function BottomNavbar() {
    return (
        <>
            <Navbar id='bottom-navbar' className='justify-content-center border-top border-2 py-1' style={{ height: "56px !important" }}>
                <Container fluid className='d-flex justify-content-between px-0' style={{ height: "100%" }}>
                    {navigationTabs.map((tab, index) => <BottomNavbarTab key={index} label={tab.label} navigateTo={tab.href} icon={tab.icon} />)}
                </Container>
            </Navbar>
        </>
    )
}

export default BottomNavbar