import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    
    public isAuthenticatedUser = new BehaviorSubject<boolean>(false);

    constructor() { }
    async signIn(username: string, password: string) {
        const user = await Auth.signIn(username, password);
        this.isAuthenticatedUser.next(true);
        return user;
    }

    async signUp(username: string, password: string, givenName: string, familyName: string) { // To pass an object
        const { user } = await Auth.signUp({
            username,
            password,
            attributes: {
                given_name: givenName,
                family_name: familyName //optional to create to the Cognito Console
            }
        });
        console.log(user);
        return user;
    }

    async verifyCode(email: string, code: string) {
        const response = await Auth.confirmSignUp(email, code);
        console.log(response);
        return response;
    }

    async signOut() {
        this.isAuthenticatedUser.next(false);
        return await Auth.signOut();
    }

    currentAuthenticatedUser() {
        Auth.currentAuthenticatedUser()
            .then(res => {
                this.isAuthenticatedUser.next(true);
            })
            .catch(err => {
                this.isAuthenticatedUser.next(false);
            });
    }
}
