import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.scss']
})
export class ObservableComponent implements OnInit {
  tabname:any;
  constructor() { }

  ngOnInit(): void {
  }
  open(val:any){
    this.tabname= val;
  }
}
