import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

import { User } from "./access/user.model";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {


    public tokenId: string 

    constructor(
        private router: Router
    ){}
    
    
    public userRegister(user: User): Promise<any> {
        //console.log('serviço de autenticação: ', user);

        return firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
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
            .then((response: any) => {
                firebase.auth().currentUser.getIdToken()
                    .then( (idToken: string) => {
                        this.tokenId = idToken;
                        localStorage.setItem('idToken', idToken);
                        this.router.navigate(['/home']);
                    })
            })
            .catch((error: Error) => console.log(error))

    }


    public authenticated(): boolean {

        if (this.tokenId === undefined && localStorage.getItem('idToken') != null ){
            this.tokenId = localStorage.getItem('idToken');
        }

        return this.tokenId !== undefined

    }


    public logout():void {

        localStorage.removeItem('idToken')

    }
}