import AuthProtection from './authProtection';
import { useAppSelector } from '../../hooks/store';

type AuthProtectionRouterProps = {
    children: React.ReactNode;
}

function AuthProtectionRouter(props: AuthProtectionRouterProps) {
    const auth = useAppSelector(state => state.auth);
    
    if (!auth.isAuth) return <AuthProtection />

    return props.children;
}

export default AuthProtectionRouter