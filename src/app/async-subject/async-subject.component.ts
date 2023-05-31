import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  subscribe1!:boolean;
  videoName:any;
  constructor( private commonservice:CommonService) { }

  ngOnInit(): void {
    this.commonservice.$asyncSubject.subscribe(res =>{
      this.videoName = res
    })
  }

  add1(val :any){
    console.log(val);
    this.commonservice.$asyncSubject.next(val);
  }

  complete(){
    this.commonservice.$asyncSubject.complete();
  }
}
