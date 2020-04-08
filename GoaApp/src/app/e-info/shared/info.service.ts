import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Beach } from '../../beach/shared/beach.model';
import { Waterfall } from '../../waterfalls/shared/waterfall.model';
import { Religious } from '../../religious/shared/religious.model';
import { Shopping } from '../../shoppings/shared/shopping.model';
import { Picnic } from '../../picnics/shared/picnic.model';
import { Romantic } from '../../romantics/shared/romantic.model';


@Injectable({
  providedIn: 'root'
})
export class InfoService {
  selectedBeach: Beach;
  selectedWaterfall: Waterfall;
  selectedReligious: Religious; 
  selectedShopping: Shopping;
  selectedPicnic: Picnic;
  selectedRomantic: Romantic;
  
  beaches: Beach[];
  waterfalls: Waterfall[];
  religiouss: Religious[];
  shoppings: Shopping[];
  picnics: Picnic[];
  romantics: Romantic[];

  readonly baseURL = 'http://localhost:3000/beaches';
  readonly baseURL1 = 'http://localhost:3000/waterfalls';
  readonly baseURL2 = 'http://localhost:3000/religiousPlaces';
  readonly baseURL3 = 'http://localhost:3000/shoppingPlaces';
  readonly baseURL4 = 'http://localhost:3000/picnicSpots';
  readonly baseURL5 = 'http://localhost:3000/romanticPlaces';

  constructor(private http : HttpClient) { }

  getBeachList(_id: string){
    return  this.http.get(this.baseURL );
  }

  getWaterfallList(){
    return  this.http.get(this.baseURL1);
  }

  getReligiousList(){
    return  this.http.get(this.baseURL2);
  }

  getShoppingList(){
    return  this.http.get(this.baseURL3);
  }

  getPicnicList(){
    return  this.http.get(this.baseURL4);
  }

  getRomanticList(){
    return  this.http.get(this.baseURL5);
  }
}
