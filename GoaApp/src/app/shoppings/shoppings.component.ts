import { Component, OnInit } from '@angular/core';

import { ShoppingService } from '../shoppings/shared/shopping.service';
import { Shopping } from '../shoppings/shared/shopping.model';

@Component({
  selector: 'app-shoppings',
  templateUrl: './shoppings.component.html',
  styleUrls: ['./shoppings.component.css'],
  providers: [ShoppingService]
})
export class ShoppingsComponent implements OnInit {

  constructor(private shoppingService: ShoppingService) { }

  ngOnInit() {
    this.refreshShoppingList();
  }

  refreshShoppingList(){
    this.shoppingService.getShoppingList().subscribe((res) => {
      this.shoppingService.shoppings = res as Shopping[];
    });
  }

}
