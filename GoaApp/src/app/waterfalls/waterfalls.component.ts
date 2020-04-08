import { Component, OnInit } from '@angular/core';

import { WaterfallService } from '../waterfalls/shared/waterfall.service';
import { Waterfall } from '../waterfalls/shared/waterfall.model';

@Component({
  selector: 'app-waterfalls',
  templateUrl: './waterfalls.component.html',
  styleUrls: ['./waterfalls.component.css'],
  providers: [WaterfallService]
})
export class WaterfallsComponent implements OnInit {

  constructor(private waterfallService: WaterfallService) { }

  ngOnInit() {
    this.refreshWaterfallList();
  }


  refreshWaterfallList(){
    this.waterfallService.getWaterfallList().subscribe((res) => {
      this.waterfallService.waterfalls = res as Waterfall[];
    });
  }
}
