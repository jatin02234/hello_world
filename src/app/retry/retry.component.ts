import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan, Subscription, take, takeLast } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {
  userdata:any;
  feaching =false;
  status= 'No Data';

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
  }

  getUserData(){
    this.feaching= true
    this.status = 'feaching Data...'
    setTimeout(() => {
      this.commonService.getEmployed()
      // .pipe(retry(4))     //retry operater
      .pipe(retryWhen(err => err.pipe(
        delay(3000),
        scan((retryCount:any)=>{
          console.log('feat');
          
          if(retryCount >= 4){
            throw err;
          }
          else{
            retryCount = retryCount+1;
            console.log(retryCount);
            return retryCount
          }
        },0)
      )))
      .subscribe(
      (res:any)=>{
        this.feaching =false
        this.userdata = res.list
        this.status = 'Complated'
      },
      (err)=>{
        this.feaching =false
        console.log(err.message);
        this.status='something went worng!!'
      }
      )
    }, 2000);
    }

}

