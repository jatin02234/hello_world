import { Component, OnInit } from '@angular/core';
import { filter, toArray }  from 'rxjs/operators';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  data2:any;

  constructor(private commonService : CommonService) { }
  data1:any;

  ngOnInit(): void {
    this.getUserData()
  }

  // ex - 1
  private getUserData(){
    this.commonService.getEmployed()
    .subscribe((res:any)=>{
      this.data1= res.list.filter((data:any) => data.name.length > 10);
      this.data2= res.list.filter((data:any) => data.salary > "$40000");
      console.log(this.data2);
    })
  }
}