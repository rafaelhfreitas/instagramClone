import { User } from "./access/user.model";

export class AuthService {
    public userRegister(user: User): void {
        console.log('serviço de autenticação: ', user);
    }
}