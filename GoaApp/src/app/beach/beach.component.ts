import { Component, OnInit } from '@angular/core';

import { BeachService } from '../beach/shared/beach.service';
import { Beach } from '../beach/shared/beach.model';

@Component({
  selector: 'app-beach',
  templateUrl: './beach.component.html',
  styleUrls: ['./beach.component.css'],
  providers: [BeachService]
})
export class BeachComponent implements OnInit {
  // customBeaches: any[] = [];

  constructor(private beachService: BeachService) { }

  ngOnInit() {
    this.refreshBeachList();
  }

  refreshBeachList(){
    this.beachService.getBeachList().subscribe((res: any[]) => {
      this.beachService.beaches = res as Beach[];
      // this.customBeaches = [];
      // res.forEach(element => { 
      //   this.customBeaches.push({ b: element, id: element['_id'] })
      // });
      // console.log(this.customBeaches);
    });
  }

  onEdit(beach: Beach) {
    this.beachService.selectedBeach = beach;
  }

}
