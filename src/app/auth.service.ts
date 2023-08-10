import { User } from "./access/user.model";
import * as firebase from 'firebase';

export class AuthService {
    
    
    public userRegister(user: User): void {
        //console.log('serviço de autenticação: ', user);

        firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then((response: any) => {
                // console.log(response);
                delete user.password;
                firebase.database().ref(`userDetail/${btoa(user.email)}`)
                    .set(user);
            })
            .catch((error: Error) => console.log(error));
    }


    public authenticate(email: string, password: string): void {

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response: any) => console.log(response))
            .catch((error: Error) => console.log(error))

    }
}