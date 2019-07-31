import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private urlUsersList = "http://localhost:3000/users/list";
  private urlCreateUser = "http://localhost:3000/users/create";
  private urlDeleteUsers = "http://localhost:3000/users/delete/"
  private urlUpdateUser = "http://localhost:3000/users/update/"
  private urlUsersMe = "http://localhost:3000/users/me"
  private urlUserModified2="";

  private urlUserSelected;

  //private httpHeaders = {headers: new HttpHeaders({"Content-Type": "application/json"})};

  constructor(private httpClient: HttpClient) { }

  getUsersList():Observable<any> {
    const headers = new HttpHeaders;
headers.set('Content-Type','application/json; charset=UTF-8');
    return this.httpClient.get(this.urlUsersList, {headers:headers});
  }

  createUser(user): Observable<any>  {
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.post(this.urlCreateUser,user,{headers : headers})
  }

  deleteUser(id){
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    return this.httpClient.delete(this.urlDeleteUsers+id, {headers:headers});
  }
  
  modifiedUser(user):Observable<any>{
    console.log(user);
    const headers = new HttpHeaders;
    headers.set('Content-Type','application/json; charset=UTF-8');
    this.urlUserModified2=this.urlUpdateUser + user.newData.userId;
    return this.httpClient.patch(this.urlUserModified2,user.newData,{headers:headers});
  
  }
  setUserelected(user):Observable<any>{
    const headers = new HttpHeaders;
    headers.set('Content-Type','application/json');
    this.urlUserSelected = this.urlUserSelected + user.newData.id;
    console.log(this.urlUserSelected);
    console.log(user.newData);
    return this.httpClient.patch(this.urlUserSelected,user.newData, {headers:headers});
  }

  getUsersMe():Observable<any> {
    const tkn= localStorage.getItem('tkn');
    console.log(tkn);
  let headers= new HttpHeaders({'Authorization': 'Bearer ' + tkn});
headers.append('Content-Type','application/json; charset=utf-8');
console.log(headers);
return this.httpClient.get(this.urlUsersMe,{headers:headers});
  }
  /*
  createUser(): Observable<any> {
    const headers = new HttpHeaders();
    headers.set('Content-Type', 'application/json; charset=utf-8');
    return this.httpClient.post(this.urlUserCreate, user, {headers: headers})
  }
  */
}
