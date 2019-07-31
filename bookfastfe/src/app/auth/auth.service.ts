import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IUser } from '../models/iuser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private httpOptions =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
  private loggedIn = new BehaviorSubject < boolean > (false);
  private loggedInAdmin = new BehaviorSubject < boolean > (false);
  private urlUsersLogin = 'http://localhost:3000/users/login';
  private loggedOut = new BehaviorSubject < boolean > (true);

  constructor(private router: Router, private httpClient: HttpClient) {}

  get isLoggedInAdmin(){
      return this.loggedInAdmin.asObservable();
  }

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  get isLogeedOut() {
    return this.loggedOut.asObservable();
  }

  /*login(user: IUser) {

    if (user.email !== '' && user.password !== '' ) {
      this.httpClient.post(this.urlUsersLogin, user, this.httpOptions).subscribe(data => {
        const miToken: any = data;
        localStorage.setItem('tkn', miToken.token);
        this.loggedIn.next(true);
        this.router.navigate(['/']);
        console.log('miToken:', miToken );
        console.log('You are logedIn');
        console.log(miToken.token);
        localStorage.setItem('tkn', miToken.token);
        this.loggedIn.next(true);
        this.router.navigate(['/']);
    }
  }
}*/

login(user: IUser){
  if ( user.email !== '' && user.password !== '' ){
    if ( user.role == 'admin' ) {
      this.httpClient.post(this.urlUsersLogin, user, this.httpOptions).subscribe(data => {
        const miToken: any = data;
        localStorage.setItem('tkn', miToken.token);
        this.loggedInAdmin.next(true);
        this.router.navigate(['/main/productsList']);
        console.log('miToken:', miToken );
        console.log('LogedIn as an Admin');
      });
      }else{
        this.httpClient.post(this.urlUsersLogin, user, this.httpOptions).subscribe(data => {
          const miToken: any = data;
          localStorage.setItem('tkn', miToken.token);
          this.loggedIn.next(true);
          this.loggedOut.next(false)
          this.router.navigate(['/main/welcome']);
          console.log('miToken:', miToken );
          console.log('LogedIn as User');
        });
      }
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.loggedOut.next(true);
    this.router.navigate(['/']);
  }
}
