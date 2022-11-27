import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealListComponent } from './meal-list/meal-list.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [
    MealListComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports:[
    MealListComponent
  ]
})
export class MealsModule { }
