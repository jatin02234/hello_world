import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { debounceTime, fromEvent, map } from 'rxjs';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements OnInit, AfterViewInit {
  @ViewChild('myinput')myinput!:ElementRef;
  datarequst=null

  constructor() { }
  ngAfterViewInit(): void {
      const data = fromEvent(this.myinput.nativeElement, 'keyup').pipe(
        map((event:any)=> event.target.value),
        debounceTime(2000)
      )
      data.subscribe((res:any)=>{
        console.log(res); 
        this.datarequst = res     
      })
  }

  ngOnInit(): void {
  }
  oninput(event:any){
    console.log(event);
    
  }
}
