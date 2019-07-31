import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {

  constructor ( private userService:UserService) { }

  user:IUser;
  ngOnInit() {}

}
