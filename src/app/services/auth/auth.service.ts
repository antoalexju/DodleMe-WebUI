import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private registerUrl = "http://locahost/api/register";
  private loginUrl = "http://locahost/api/login";

  constructor(private http: HttpClient) { }

  registerUser(_User){

  }

}
