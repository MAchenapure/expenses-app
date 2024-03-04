import React from 'react'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'

type BottomNavbarTabProps = {
    label: string,
    icon: string,
    navigateTo: string
}

const BottomNavbarTab = (props: BottomNavbarTabProps) => {
    const { label, icon, navigateTo } = props;
    return (
        <Link to={navigateTo} className='text-decoration-none text-reset d-flex flex-column justify-content-center align-items-center border-end border-start' style={{ flex: '1 0', padding: '5px', maxWidth: '25%', minWidth: '0' }}>
            <Image src={icon} style={{ width: '20px', height: '20px' }} />
            <span className='text-center' style={{ fontSize: '0.75rem', width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{label}</span>
        </Link>
    )
}

export default React.memo(BottomNavbarTab)