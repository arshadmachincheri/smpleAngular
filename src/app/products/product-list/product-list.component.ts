import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
productlist:any[]=[]
mealslist:any[]=[]
sample:any="helloWorld"
  constructor(private ServicesService:ServicesService) { }

  ngOnInit(): void {
  this.loadProducts()
  this.loadMeals()
  
  }
  loadProducts(){
    this.ServicesService.getProducts().subscribe((data: any)=>{
      this.productlist=data;
      console.log(data)
    })
  }
  loadMeals(){
    this.ServicesService.getMeals().subscribe((data :any)=>{
      this.mealslist=data.categories;
      console.log(data)

      
    })
  }
  

}
