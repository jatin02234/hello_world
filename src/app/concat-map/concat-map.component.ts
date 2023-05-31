import { Component, OnInit } from '@angular/core';
import { concat, interval, map, merge, take } from 'rxjs';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {
  movieVideo:any;
  comedyVideo:any;
  video:any;
  allVideo:any = [];
  allVideo2:any = [];
  constructor(private commonservice:CommonService) { }

  ngOnInit(): void {
    this.movieVideo = interval(1000).pipe(map(res=>`Movie Video #${res+1}`),take(6))
    this.comedyVideo = interval(4000).pipe(map(res=>`Comedy Video #${res}`),take(4))
    this.video = interval(2000).pipe(map(res=>`Other video #${res+1}`),take(4))

    ////concat operater ex-  
      let commonVideo = concat(this.movieVideo, this.comedyVideo, this.video)
      commonVideo.subscribe(res=>{
        this.allVideo.push(res)
      })

    //// Merge operater ex-
    let commonVideo2 = merge(this.movieVideo, this.comedyVideo, this.video)
    commonVideo2.subscribe(res=>{
      this.allVideo2.push(res)
    })
  }
}
