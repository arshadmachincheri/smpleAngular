import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
cards:any[]=[]
cardsproduct= new BehaviorSubject<any>([]);

API_URL='https://fakestoreapi.com/products';
MEALS_API_URL="https://www.themealdb.com/api/json/v1/1/categories.php";

  constructor(private http: HttpClient) { }
  getProducts(){
    return this.http.get(this.API_URL);
  }
  getMeals(){
    return this.http.get(this.MEALS_API_URL);
  }
  getdetailsProducts(product:any){
    return this.http.get(`${this.API_URL}/${product}`)
  }

addproducts(product:any){
  return this.http.post(this.API_URL,{
    title:product.title,
    price:product.price,
    description:product.description,
    image:product.image,
    category:product.category,
  })
}

addcart(product:any){
this.cards.push(product)
console.log("&&&",this.cards)
 this.cardsproduct.next(this.cards)
}
getcard(){
 return this.cardsproduct.asObservable();
}
}

