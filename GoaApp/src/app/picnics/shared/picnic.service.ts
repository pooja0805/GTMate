import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Picnic } from './picnic.model';

@Injectable({
  providedIn: 'root'
})
export class PicnicService {
  selectedPicnic: Picnic;
  picnics: Picnic[];
  readonly baseURL = 'http://localhost:3000/picnicSpots';

  constructor(private http : HttpClient) { }

  getPicnicList(){
    return  this.http.get(this.baseURL);
  }
}
