import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "../../models/User";
import {ApiService} from "../api/api.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://locahost/api/register";
  private loginUrl = "http://locahost/api/login";

  private logged: boolean = false;
  private identified: boolean = false;
  public user: User = new User();

  constructor(
      private http: HttpClient,
      private apiService: ApiService,
      private router: Router
  ) { }

  registerUser(User){

  }

  registerAnonyme(username){
    this.user.alias = username;
    this.apiService.createAnonUser(this.user).subscribe(
        user => {
          this.user.idUser = user.idUser;
          this.logged = true;
          this.router.navigate(['/event/create']).then(r => {});
        },
        error => {
          console.log(error);
        }
    );
  }

  login(User){
    this.logged = false;
  }

  isLogged(){
    return this.logged;
  }

  logout() {
    this.logged = false;
    this.user = new User();
    this.identified = false;
  }
}
