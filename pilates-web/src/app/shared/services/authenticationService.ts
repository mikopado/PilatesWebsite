import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    
    public isAuthenticatedUser$ = new BehaviorSubject<boolean>(false);

    constructor() { }
    async signIn(username: string, password: string) {
        const user = await Auth.signIn(username, password);
        if(user){
            this.isAuthenticatedUser$.next(true);
        }
        return user;
    }

    async signUp(username: string, password: string) { // To pass an object
        return await Auth.signUp({
            username,
            password            
        });
    }

    async verifyCode(email: string, code: string) {
        const response = await Auth.confirmSignUp(email, code);
        return response;
    }

    async signOut() {
        try{
            await Auth.signOut( { global: true } );
            this.isAuthenticatedUser$.next(false);
        }catch {
            this.isAuthenticatedUser$.next(true);
        }       
    }

    async currentAuthenticatedUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            return { userSession: user.signInUserSession, isAuthenticated: true, userAttributes: user.attributes };
        } catch {
            return { userSession: null, isAuthenticated : false, userAttributes: null };
        }        
    }
}
