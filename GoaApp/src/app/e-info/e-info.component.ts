import { Component, OnInit } from '@angular/core';

import { BeachService } from '../beach/shared/beach.service';
import { Beach } from '../beach/shared/beach.model';

import { WaterfallService } from '../waterfalls/shared/waterfall.service';
import { Waterfall } from '../waterfalls/shared/waterfall.model';

import { ReligiousService } from '../religious/shared/religious.service';
import { Religious } from '../religious/shared/religious.model';

import { ShoppingService } from '../shoppings/shared/shopping.service';
import { Shopping } from '../shoppings/shared/shopping.model';

import { PicnicService } from '../picnics/shared/picnic.service';
import { Picnic } from '../picnics/shared/picnic.model';

import { RomanticService } from '../romantics/shared/romantic.service';
import { Romantic } from '../romantics/shared/romantic.model';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-e-info',
  templateUrl: './e-info.component.html',
  styleUrls: ['./e-info.component.css'],
  providers: [BeachService]
})
export class EInfoComponent implements OnInit {

  currentBeachID: any;
  currentWaterfallID: any;
  currentReligiousID: any;
  currentShoppingID: any;
  currentPicnicID: any;
  currentRomanticID: any;
  current: any;
  constructor(private beachService: BeachService, private waterfallService: WaterfallService, private religiousService: ReligiousService, private shoppingService: ShoppingService, private picnicService: PicnicService, private romanticService: RomanticService, private actRoute: ActivatedRoute) {}

  ngOnInit() {

    this.actRoute.paramMap.subscribe(pa => {

      if (pa['params']['_id'] !== undefined && pa['params']['_id'] !== null) {
        this.currentBeachID = pa['params']['_id'];
        this.refreshList();
      }
    });

    this.actRoute.paramMap.subscribe(pa1 => {

      if (pa1['params']['_id'] !== undefined && pa1['params']['_id'] !== null) {
        this. currentWaterfallID = pa1['params']['_id'];
        this.refreshList();
      }
    });

    this.actRoute.paramMap.subscribe(pa2 => {

      if (pa2['params']['_id'] !== undefined && pa2['params']['_id'] !== null) {
        this. currentReligiousID = pa2['params']['_id'];
        this.refreshList();
      }
    });

    this.actRoute.paramMap.subscribe(pa3 => {

      if (pa3['params']['_id'] !== undefined && pa3['params']['_id'] !== null) {
        this. currentShoppingID = pa3['params']['_id'];
        this.refreshList();
      }
    });

    this.actRoute.paramMap.subscribe(pa4 => {

      if (pa4['params']['_id'] !== undefined && pa4['params']['_id'] !== null) {
        this. currentPicnicID = pa4['params']['_id'];
        this.refreshList();
      }
    });

    this.actRoute.paramMap.subscribe(pa5 => {

      if (pa5['params']['_id'] !== undefined && pa5['params']['_id'] !== null) {
        this. currentRomanticID = pa5['params']['_id'];
        this.refreshList();
      }
    });

  }


  refreshList() {
    debugger;

    this.beachService.getBeachList().subscribe((res: any[]) => {
      debugger;
      res.forEach(be => {
        if (this.currentBeachID === be['_id']) {
          this.current = be;
        }
      })
    });

    this.waterfallService.getWaterfallList().subscribe((res: any[]) => {
      debugger;
      res.forEach(wa => {
        if (this.currentWaterfallID === wa['_id']) {
          this.current = wa;
        }
      })
    });

    this.religiousService.getReligiousList().subscribe((res: any[]) => {
      debugger;
      res.forEach(r => {
        if (this.currentReligiousID === r['_id']) {
          this.current = r;
        }
      })
    });

    this.shoppingService.getShoppingList().subscribe((res: any[]) => {
      debugger;
      res.forEach(sp => {
        if (this.currentShoppingID === sp['_id']) {
          this.current = sp;
        }
      })
    });

    this.picnicService.getPicnicList().subscribe((res: any[]) => {
      debugger;
      res.forEach(ps => {
        if (this.currentPicnicID === ps['_id']) {
          this.current = ps;
        }
      })
    });

    this.romanticService.getRomanticList().subscribe((res: any[]) => {
      debugger;
      res.forEach(rp => {
        if (this.currentRomanticID === rp['_id']) {
          this.current = rp;
        }
      })
    });

  }
}
