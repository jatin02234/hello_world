import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-map-operter',
  templateUrl: './map-operter.component.html',
  styleUrls: ['./map-operter.component.scss']
})
export class MapOperterComponent implements OnInit {

  constructor(private service:CommonService) { }

  ngOnInit(): void {
  }
  onclick(){
    this.service.getEmployed().subscribe((res:any)=>{
      res.list.map((data:any) => {
        const name = data?.name
        this.timeInterval(name);
      })
    })
  }
  
  timeInterval(name:any){
      this.service.print(name, 'containerId')
  }
}
