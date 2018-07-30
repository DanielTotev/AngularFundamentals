import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginModel } from './models/login.model';
import { RegisterModel } from './models/register.model';

const appKey = "kid_Sk7Ieo_E7";
const appSecret = "9fafd0ff38e14b20ad2a8a1587185d4d";
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `https://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `https://baas.kinvey.com/user/${appKey}/_logout`;


@Injectable()
export class AuthenticationService {
    private currentAuthtoken: string;

    constructor(private httpClient: HttpClient) { }

    private getHeaders(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            });
        }

        return new HttpHeaders({
            'Authorization': `Kinvey ${localStorage.getItem('authtoken')}`,
            'Content-Type': 'application/json'
        });
    }

    login(model: LoginModel) {
        return this.httpClient.post(loginUrl, JSON.stringify(model), {
            headers: this.getHeaders('Basic')
        });
    }

    register(model: RegisterModel) {
        return this.httpClient.post(registerUrl, JSON.stringify(model), {
            headers: this.getHeaders('Basic')
        });
    }

    logout() {
        return this.httpClient.post(logoutUrl, {}, {
            headers: this.getHeaders('Kinvey')
        });
    }

    get authtoken(): string {
        return this.currentAuthtoken;
    }

    set authtoken(authtoken: string) {
        this.currentAuthtoken = authtoken;
    }

    checkIfLogged(): boolean {
        return this.currentAuthtoken === localStorage.getItem('authtoken');
    }
}
