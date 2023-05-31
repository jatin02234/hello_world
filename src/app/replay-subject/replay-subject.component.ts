import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {
  interval:any;
  commonVideo:any = [];
  sub2:any=[]
  sub1:any=[]
  subscribe1!:boolean;
  subscribe2!:boolean;
  data!:Subscription;
  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.interval = interval(1000)
    this.data = this.interval.subscribe((res:any)=>{
      if(res<20){
        let val:any = `video ${res+1}`
        this.commonService.$replaySubject.next(val)
        this.commonService.$replaySubject2.next(val)
      }      
    })
    this.commonService.$replaySubject.subscribe((res=>{
      this.commonVideo.push(res) 
      }))
  }

  add1(){
    this.subscribe1 = !this.subscribe1;
    let data!: Subscription;
    data= this.commonService.$replaySubject.subscribe(res=>{
    if(this.subscribe1){
        this.sub1.push(res);
      }
      else{
        data?.unsubscribe();  
      }
    })
  }

  add2(){
    this.subscribe2 = !this.subscribe2;
    let data!: Subscription;
    data = this.commonService.$replaySubject2.subscribe((res:any)=>{
      if(this.subscribe2){
        this.sub2.push(res);
      }
      else{
        data?.unsubscribe();
      }
    })
  }
  }