import { Injectable } from '@angular/core';
import { Auth } from 'aws-amplify';
import { BehaviorSubject } from 'rxjs';
import { IUser } from '../interfaces';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {
    
    public isAuthenticatedUser$ = new BehaviorSubject<boolean>(false);
    public currentUser$ = new BehaviorSubject<IUser>(null);

    constructor() { }
    async signIn(username: string, password: string) {
        const user = await Auth.signIn(username, password);
        if(user){
            await this.currentAuthenticatedUser();
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
            //this.isAuthenticatedUser$.next(false);
        }catch {
            //this.isAuthenticatedUser$.next(true);
        }     
        await this.currentAuthenticatedUser();  
    }

    async currentAuthenticatedUser() {
        try {
            const user = await Auth.currentAuthenticatedUser();
            this.currentUser$.next({id: user.attributes.sub, email: user.attributes.email});
            this.isAuthenticatedUser$.next(true);
            return { userSession: user.signInUserSession, isAuthenticated: true, userAttributes: user.attributes };
        } catch {
            this.currentUser$.next(null);
            this.isAuthenticatedUser$.next(false);
            return { userSession: null, isAuthenticated : false, userAttributes: null };
        }    
    }
}
