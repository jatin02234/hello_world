import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promic',
  templateUrl: './promic.component.html',
  styleUrls: ['./promic.component.scss']
})
export class PromicComponent implements OnInit {
  leptop = [
    { brand: 'lenovo', color: 'white'},
    { brand: 'HP', color: 'black'},
    {  brand: 'dell', color: 'black'}
  ]
  productName:any;
  product:any;
  product2:any;

  constructor() { }

  ngOnInit(): void {
  }
  
  promic(val:any){
    this.promiseoperater(val)
    this.productName.then((res: any) => {
      this.product=res
      console.log(this.product);
    }).catch((res:any) => {
      this.product=res;
      console.log(this.product);
    });
  }
  
  promiseoperater(val:any){
   return this.productName = new Promise ((resolve,rejects)=>{
      setInterval(() =>{
        if(this.leptop[0].brand === val){
          return resolve(this.leptop[0])
        }else if( this.leptop[2].brand === val){
          return resolve(this.leptop[2])
        }
        else{
          return rejects(val +' Product not available');
        }
      },3000)
    })  
  }

  async promic2(val:any){
    this.product2 = 'Fetching Data....'
    this.product2= await this.promiseoperater(val)

      console.log(this.product2);
  }

}
