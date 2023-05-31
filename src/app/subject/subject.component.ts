import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.scss']
})
export class SubjectComponent implements OnInit {
  userName:any;

  constructor(private commonService:CommonService) { }

  ngOnInit(): void {
    this.commonService.UserData.subscribe(res=>{
      this.userName = res;
    })
  }

}
