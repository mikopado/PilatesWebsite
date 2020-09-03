import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Auth } from 'aws-amplify';

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient) {}
    async signIn(username: string, password: string) {
        try {
            const user = await Auth.signIn(username, password);
            return user;
        } catch(error){
            console.log('Error sign in', error);
        }
    }

    async signUp(username: string, password: string, email: string, phone_number: string) { // To pass an object
        try {
            const { user } = await Auth.signUp({
                username,
                password,
                attributes: {
                    email, //optional to create to the Cognito Console
                    phone_number
                }
            });
            console.log(user);
            return user;
        } catch(error){
            console.log('Error sign up', error);
        }
    }
}
