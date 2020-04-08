import { Component, OnInit } from '@angular/core';

import { ReligiousService } from '../religious/shared/religious.service';
import { Religious } from '../religious/shared/religious.model';

@Component({
  selector: 'app-religious',
  templateUrl: './religious.component.html',
  styleUrls: ['./religious.component.css'],
  providers: [ReligiousService]
})
export class ReligiousComponent implements OnInit {

  constructor(private religiousService: ReligiousService) { }

  ngOnInit() {
    this.refreshReligiousList()
  }

  refreshReligiousList(){
    this.religiousService.getReligiousList().subscribe((res) => {
      this.religiousService.religiouss = res as Religious[];
    });
  }

}
