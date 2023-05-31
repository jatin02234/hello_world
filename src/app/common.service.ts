import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, interval, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  UserData= new BehaviorSubject('Angular');
  $replaySubject = new ReplaySubject<any>(3);
  $replaySubject2 = new ReplaySubject<any>(3,3000);
  $asyncSubject = new AsyncSubject();

  constructor(private http: HttpClient) { }
  print(val: any, containerId: any) {
    let el = document.createElement('li');
    el.innerHTML = val;

    document.getElementById(containerId)?.appendChild(el);
  }
  getEmployed() {
    return this.http.get('http://www.mocky.io/v2/5ea172973100002d001eeada')
  }

  getInterval(){
    return interval(1000);
  }
}