import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from "rxjs";
import {_Event} from "../../models/Event";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }

  API_KEY = '4Rm96eNRz'; // return this.httpClient.get(`http://77.207.28.177/api/event/list&key=${this.API_KEY}`);
  API_URL = 'http://localhost/api';

  /**
   * Récupére la liste de evenement grace à l'API
   */
  public getEventList(): Observable<_Event[]>{
      return this.httpClient.get<_Event[]>(this.API_URL + '/event/list');
  }

  public getEvent(linkId: string): Observable<_Event>{
      return this.httpClient.get<_Event>(this.API_URL + '/event/'+ linkId);
  }

  public createEvent(event: _Event): Observable<any>{

      event.creator = 1;
      event.linkId = 'test';
      event.status = "openned";
      event.finalDate = '2020-06-10 00:00:00';

      const httpOptions = {
          headers: new HttpHeaders({
              'Content-Type':  'application/json',
          })
      };

      return this.httpClient.post(this.API_URL + '/event/create', JSON.stringify(event), httpOptions);
  }

}

