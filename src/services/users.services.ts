import { LoginRequestDto } from "../dtos/login.request.dto";
import { LoginResponseDto } from "../dtos/login.response.dto";
import { User } from "../entities/user.entity";
import { HttpMethodTypes, useFetch } from "./use-fetch";

const baseApiUrl = import.meta.env.VITE_EXPENSES_API;

export const getAllUsers = async (): Promise<User[]> => {
    const apiUrl = new URL(`${baseApiUrl}/users`);
    const response: { users: User[] } = await useFetch(apiUrl, HttpMethodTypes.GET);
    return response.users;
}

export const login = async (body: LoginRequestDto): Promise<LoginResponseDto> => {
    const apiUrl = new URL(`${baseApiUrl}/users/login`);
    const response: LoginResponseDto = await useFetch(apiUrl, HttpMethodTypes.POST, body);
    return response;
}

export const signUp = async () => {}