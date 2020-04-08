import { Component, OnInit } from '@angular/core';

import { RomanticService } from '../romantics/shared/romantic.service';
import { Romantic } from '../romantics/shared/romantic.model';

@Component({
  selector: 'app-romantics',
  templateUrl: './romantics.component.html',
  styleUrls: ['./romantics.component.css'],
  providers: [RomanticService]
})
export class RomanticsComponent implements OnInit {

  constructor(private romanticService: RomanticService) { }

  ngOnInit() {
    this.refreshRomanticList();
  }

  refreshRomanticList(){
    this.romanticService.getRomanticList().subscribe((res) => {
      this.romanticService.romantics = res as Romantic[];
    });
  }

}
