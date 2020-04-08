import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Beach } from './beach.model';

@Injectable({
  providedIn: 'root'
})
export class BeachService {
  selectedBeach: Beach;
  beaches: Beach[];
  readonly baseURL = 'http://localhost:3000/beaches';

  constructor(private http : HttpClient) { }

  getBeachList(){
    return  this.http.get(this.baseURL);
  }
}
