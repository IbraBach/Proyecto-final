import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { IUser } from 'src/app/models/iuser';
import { ServerDataSource } from 'ng2-smart-table'; 

@Component({
  selector: 'app-listingu',
  templateUrl: './listingu.component.html',
  styleUrls: ['./listingu.component.scss']
})
export class ListinguComponent implements OnInit {
  settings = {
    mode : 'inline',
    
    add: {
      confirmCreate: true
    },
    edit: {
      confirmSave: true,
    },
    delete: {
     confirmDelete: true,
    },
    columns: {
      name: {
        title: 'Name'
      },
      surname: {
        title: 'Surname'
      },
      email: {
        title: 'Email'
      },
      address : {
        title: 'Address'
      },
      city: {
        title: 'City'
      },
      country: {
        title: 'Country'
      },
    
    }
  };
  data: IUser;
  myUsers: Array<IUser>;

  source: ServerDataSource;

  constructor(private userServices: UserService) { 
  }

  ngOnInit() {
    this.getUsersList();
  }

  getUsersList() {
    this.userServices.getUsersList().subscribe(data=> {
      this.myUsers = data;
    })
  }

  deleteUser(user){
    let evento= user;
    console.log(user);
    this.userServices.deleteUser(user.data.userId).subscribe (data => {
      console.log(data);
      evento.confirm.resolve(data);
    });
  }

  setUserSelected(user: IUser){
    this.userServices.setUserelected(user).subscribe(data=> 
      this.myUsers =data);
      this.getUsersList();
  }
  createUser(objeto){
    let evento=objeto;
    let user = objeto.newData;
    delete user.id;
    user.password="holahola";
    console.log(user);
    this.userServices.createUser(user).subscribe(data=>{
      this.myUsers =data});
      console.log(this.myUsers);
     // evento.confirm.resolve(data);
      }

  onEditConfirm(user:IUser) {
    console.log(user);
    this.userServices.modifiedUser(user).subscribe(data=>{
      this.myUsers=data});
          }
      
  }
    // if (window.confirm('Are you sure you want to save?')) {
    //   event.confirm.resolve(event.newData);
    // } else {
    //   event.confirm.reject();
    // }
  

