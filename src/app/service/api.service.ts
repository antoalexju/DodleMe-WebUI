import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = '4Rm96eNRz'; //return this.httpClient.get(`http://77.207.28.177/api/event/list&key=${this.API_KEY}`);
  API_URL = 'http://localhost/api';

  /**
   * Récupére la liste de evenement grace à l'API
   */
  public getEventList(){

    return this.httpClient.get(this.API_URL + '/event/list');
  }

  public createEvent(event: _Event): Observable<_Event>{

    return this.httpClient.post<_Event>(this.API_URL + '/event/create', event);
  }

}

class _Event {

   title: string;
   creator: number;
   participants: number;
   location: string;
   description: string;
   limitDate: string;
   isPrivate: boolean;
   linkId: string;
}

