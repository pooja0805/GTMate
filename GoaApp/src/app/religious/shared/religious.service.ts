import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Religious } from './religious.model';

@Injectable({
  providedIn: 'root'
})
export class ReligiousService {
  selectedReligious: Religious;
  religiouss: Religious[];
  readonly baseURL = 'http://localhost:3000/religiousPlaces';

  constructor(private http : HttpClient) { }

  getReligiousList(){
    return  this.http.get(this.baseURL);
  }
}
