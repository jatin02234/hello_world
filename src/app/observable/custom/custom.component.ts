import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    //manual
    const obs1 = Observable.create((data:any)=>{
      setTimeout(() => {
        data.next('Angular')
      }, 1000);
      setTimeout(() => {
        data.next('Typescript')
      }, 2000);
      setTimeout(() => {
        data.next('Scss')
        data.error(new Error('limit'));
      }, 3000);
      setTimeout(() => {
        data.next('Html')
        // data.complete()
      }, 4000);
    })

    obs1.subscribe((res:any)=>{
      this.print(res, 'containerId')
    // },
    // (err:any)=>{
    //   //errorpart
    // },()=>{
    //   //complete Part
    })
   
    const arr = ['Html', 'Scss', 'Typescript', 'angular', 'Javascript']
    const obs2 = Observable.create((data:any) =>{
      let index=0;
      setInterval(()=>{
          data.next(arr[index])
          
          if(index >= 3){
            data.error('limit error')
          }
          index++
        },1000)
    })

    obs2.subscribe((res:any)=>{
      this.print(res, 'containerId2')
    })
  }

  print(val:any, containerId:any){
    let el = document.createElement('li');
    el.innerHTML = val;

    document.getElementById(containerId)?.appendChild(el);
  }
}
