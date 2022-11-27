import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { ServicesService } from 'src/app/services/services.service';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
productdetails:any={}
products:any
res:any;
card:any[]=[]
  constructor( private route: ActivatedRoute,
    private ServicesService:ServicesService) { }

  ngOnInit(): void {
    this.loadDetailsProducts()
    this.ServicesService.getcard().subscribe((data:any)=>{
      this.card=data;
      console.log("success",this.card=data)
    }) 
  }
loadDetailsProducts(){
  const products=this.route.snapshot.paramMap.get('productId')
  this.ServicesService.getdetailsProducts(products).subscribe((data:any)=>{
  this.productdetails=data;
  })
}

btnclcik(data:any){
  this.ServicesService.addcart(data)
  
}

}
