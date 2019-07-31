import { Component, OnInit } from '@angular/core';
import { IMe } from 'src/app/models/iuser';
import { UserService } from 'src/app/services/user.service';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-me',
  templateUrl: './me.component.html',
  styleUrls: ['./me.component.scss']
})
export class MeComponent implements OnInit {

  usersMe: Array<IMe>;

  constructor(private userServices: UserService) { }

  ngOnInit() {
    this.getUsersMe();
  }
  getUsersMe(){
    //localStorage.clear();
    this.userServices.getUsersMe().subscribe(data => {
      this.usersMe = data;
      console.log(this.usersMe);
    })
  }

}
