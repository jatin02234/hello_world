import { Component, OnInit } from '@angular/core';
import { of , mergeMap, map, mergeAll, Observable} from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-f-merge-map',
  templateUrl: './f-merge-map.component.html',
  styleUrls: ['./f-merge-map.component.scss']
})
export class FMergeMapComponent implements OnInit {
  data: any = [];
  data2: any=[];

  constructor(private commonsrevice: CommonService) { }

  ngOnInit(): void {
    // map
    this.commonsrevice.getEmployed().pipe(
      map((res: any) => {
        let data2: any;
        data2 = res?.list.forEach((data: any) =>
          this.getData(data.name)
            .subscribe((val) => {
              this.data.push(val)
            })
        )
      })).subscribe(res =>{
        console.log(res);
        
      })

      this.commonsrevice.getEmployed().pipe(
        map((res: any):Observable<any> => {
          return res?.list.forEach((data: any) =>{
            return this.getData(data.name)
              .subscribe((val) => {
                this.data2.push(val)
              })
            })
        }),
        mergeAll()).subscribe(res => console.log('test',res)
        )

      //margeMap
      this.commonsrevice.getEmployed().pipe(
        mergeMap((res:any) => {
         return res?.list.forEach((data: any) => this.getData(data.name)
            .subscribe((val) => {
      this.commonsrevice.print(val, 'containerId2')
            })
          );
      })
      ).subscribe(res=>{
        console.log(res);
        
      })
  }

  getData(data: any) {
    return of('Hello ' + data)
  }

}
