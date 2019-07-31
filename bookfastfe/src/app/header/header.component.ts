import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>;
  isLoggedInAdmin$: Observable<boolean>
  isLoggedOut$: Observable<boolean>;

  constructor(    
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.isLoggedIn$ = this.authService.isLoggedIn;
    this.isLoggedInAdmin$ = this.authService.isLoggedInAdmin;
    this.isLoggedOut$ = this.authService.isLogeedOut;
  }
  onLogout(){
    this.authService.logout();
  }
}
