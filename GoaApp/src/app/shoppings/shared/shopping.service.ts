import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
//import 'rxjs/add/operator/map';
//import 'rxjs/add/operator/toPromise';

import { Shopping } from './shopping.model';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  selectedShopping: Shopping;
  shoppings: Shopping[];
  readonly baseURL = 'http://localhost:3000/shoppingPlaces';

  constructor(private http : HttpClient) { }

  getShoppingList(){
    return  this.http.get(this.baseURL);
  }
}
