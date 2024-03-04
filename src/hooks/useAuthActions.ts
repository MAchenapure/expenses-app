import { useAppDispatch } from "./store";
import { login, logout } from "../redux/authSlice";
import { User } from "../entities/user.entity";

export const useAuthActions = () => {
    const dispatch = useAppDispatch();

    const loginUser = (user: User) => {
        dispatch(login(user))
    }

    const logoutUser = () => {
        dispatch(logout());
    }

    return { loginUser, logoutUser };
}

