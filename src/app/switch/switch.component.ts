import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {
  selected : string="";
  constructor() { }

  ngOnInit(): void {
  }
  product(val:any){
    this.selected =val.target.value;
  }
}
