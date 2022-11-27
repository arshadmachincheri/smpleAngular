import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';

@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {
meals:any[]=[]
joker:any=''
  constructor(private ServicesService:ServicesService) { }

  ngOnInit(): void {
    this.loadMealDetails()
  }
loadMealDetails(){
  this.ServicesService.getMeals().subscribe((data: any)=>{
  this.meals=data.categories;
  console.log(data)
  })
}

}
