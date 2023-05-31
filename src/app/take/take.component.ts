import { Component, OnInit } from '@angular/core';
import { interval, Subscription, take, takeLast, takeUntil, timer } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  constructor(private readonly commonService:CommonService) { }

  ngOnInit(): void {
    this.getUserData()

    // ex 1
    let data:any = interval(1000).pipe(take(4))
    data.subscribe((res:any)=>{
      console.log('take',res);
    })
    // ex 2  => last 4 value show
    data.pipe(takeLast(4)).subscribe((res:any)=>{
      console.log('takeLast',res);
    })
     // ex 3  => 
     data = timer(11000)
    let data3:any = interval(2000).pipe(takeUntil(data))
     data3.subscribe((res:any)=>{
      console.log('takeuntil',res);
    })
    
  }

  getUserData(){
    // EX 2//
    let getdata:Subscription;
    this.commonService.getEmployed()
    .pipe(take(3))
      .subscribe((res:any)=>{
        res.list.map((data:any)=>{
          console.log(data.name);
        })
      })
}
}
