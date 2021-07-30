import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get("http://localhost:4000/home",{responseType:"json"});
  }

  postUserData(body:any){
    return this.http.post("http://localhost:4000/about", body);
  }
}
