import { Component, OnInit } from '@angular/core';
import { pluck, toArray } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {
  array:any=[]
  constructor(private service : CommonService) { }

  ngOnInit(): void {
  }
  onclick(){
    this.service.getEmployed().pipe(pluck('list')).subscribe((res:any)=>{
      res.forEach((data:any) => {
        const name = data?.name
        this.array.push(data);
        console.log('name',data);
        this.timeInterval(name);
        })
    })
  }
   
  private timeInterval(val :any){
    this.service.print(val, 'containerId')
  }
}


