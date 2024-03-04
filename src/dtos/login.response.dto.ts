import { User } from "../entities/user.entity";

export class LoginResponseDto {
    success!: boolean;
    user!: User
}