import { Component, OnInit } from '@angular/core';
import { Subscription,tap } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData(){
    debugger
    let getdata:Subscription;
    getdata=this.commonService.getInterval()
    .pipe(tap((res: any):any=> {
      if (res < 5) {
        return (res) * 2;
      }
    }))
      .subscribe((res:any)=>{
        // res.map((data:any) =>{
          if(res[4]){
            getdata.unsubscribe()
          }
          else if(res >50){
            getdata.unsubscribe()
          }
          let user = res
          this.commonService.print(user, 'containerId')
      // })
  })
}
}
