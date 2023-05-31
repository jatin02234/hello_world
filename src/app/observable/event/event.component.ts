import { AfterViewInit, Component, ElementRef, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit, AfterViewInit {
  @ViewChild('addbtn') addbtn:ElementRef |any ;
  videoscount:any=[];

  constructor() { }

  ngAfterViewInit(): void {
    let count=1;
    fromEvent(this.addbtn.nativeElement, 'click').subscribe(res =>{
      this.print('video ' + count)
      this.videoscount.push(count++);
    })
  }
  
  ngOnInit(): void {
  }

  print(val:any){
    let el= document.createElement('li');
    el.innerText = val;

    document.getElementById('el-list')?.appendChild(el);
  }
  
  }
 