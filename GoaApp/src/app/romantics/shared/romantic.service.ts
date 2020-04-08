import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Romantic } from './romantic.model';

@Injectable({
  providedIn: 'root'
})
export class RomanticService {
  selectedRomantic: Romantic;
  romantics: Romantic[];
  readonly baseURL = 'http://localhost:3000/romanticPlaces';

  constructor(private http : HttpClient) { }

  getRomanticList(){
    return  this.http.get(this.baseURL);
  }
}
