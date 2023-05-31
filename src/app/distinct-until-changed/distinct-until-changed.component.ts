import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, map, debounceTime, distinctUntilChanged } from 'rxjs';

@Component({
  selector: 'app-distinct-until-changed',
  templateUrl: './distinct-until-changed.component.html',
  styleUrls: ['./distinct-until-changed.component.scss']
})
export class DistinctUntilChangedComponent implements OnInit,AfterViewInit {
  @ViewChild('myinput')myinput!:ElementRef;
  datarequst=null

  constructor() { }
  ngAfterViewInit(): void {
      const data = fromEvent(this.myinput.nativeElement, 'keyup').pipe(
        map((event:any)=> event.target.value),
        debounceTime(2000),
        distinctUntilChanged()
      )
      data.subscribe((res:any)=>{
        console.log(res); 
        this.datarequst = res     
      })
  }

  ngOnInit(): void {
  }

}
