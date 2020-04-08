import { Component, OnInit } from '@angular/core';

import { PicnicService } from '../picnics/shared/picnic.service';
import { Picnic } from '../picnics/shared/picnic.model';

@Component({
  selector: 'app-picnics',
  templateUrl: './picnics.component.html',
  styleUrls: ['./picnics.component.css'],
  providers: [PicnicService]
})
export class PicnicsComponent implements OnInit {

  constructor(private picnicService: PicnicService) { }

  ngOnInit() {
    this.refreshPicnicList();
  }

  refreshPicnicList(){
    this.picnicService.getPicnicList().subscribe((res) => {
      this.picnicService.picnics = res as Picnic[];
    });
  }

}
