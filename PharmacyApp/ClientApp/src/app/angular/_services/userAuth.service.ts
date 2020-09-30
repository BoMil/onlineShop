import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../_interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

    private currentUserSubject: BehaviorSubject<User>;
    public currentUser: Observable<User>;
    productControllerUrl = '/api/Users';

    constructor(private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    /**
     * It will send user cerdentails on login and if he pass authentication,
     * store the user in the local storage
     * @name login
     * @param request `{
            "username": "string",
            "password": "string"
        }`
     */
    login(request) {
        // Poslati post request na odredjeni API
        return this.http.post<any>(`${this.productControllerUrl}/authenticate`, request)
            .pipe(map(user => {

                if (user) {
                    // Save a moment when the user logged in
                    const now = new Date();
                    localStorage.setItem('loginTime', JSON.stringify(now));

                    // store user details and jwt token in session storage to keep user logged in between page refreshes
                    this.setSessionStorage(user);
                }
                return user;
            }));
    }
    /**
     * It will send request with user cerdentails to the backend
     * @name register
     * @param request `{
            "firstName": "string",
            "lastName": "string",
            "username": "string",
            "password": "string",
            "email": "test@gmail.com",
            "type": "admin"
        }`
     */
    register(request) {
        return this.http.post<any>(`${this.productControllerUrl}/register`, request)
            .pipe(map(success => {
                return success;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loginTime');
        this.currentUserSubject.next(null);
    }

    setSessionStorage(user): void {
        localStorage.setItem('currentUser', JSON.stringify(user));
        this.currentUserSubject.next(user);
    }
}
