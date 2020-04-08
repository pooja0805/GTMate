import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Waterfall } from './waterfall.model';

@Injectable({
  providedIn: 'root'
})
export class WaterfallService {
  selectedWaterfall: Waterfall;
  waterfalls: Waterfall[];
  readonly baseURL = 'http://localhost:3000/waterfalls';

  constructor(private http : HttpClient) { }

  getWaterfallList(){
    return  this.http.get(this.baseURL);
  }
}
