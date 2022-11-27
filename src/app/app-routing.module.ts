import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
import { MealListComponent } from './meals/meal-list/meal-list.component';
import { CardListComponent } from './cards/card-list/card-list.component';
const routes: Routes = [
  
  {path:'products',component:ProductListComponent },
  { path: '',   redirectTo: '/products', pathMatch: 'full' },
  {path:'products/:productId',component:ProductDetailsComponent},
  {path:'meals',component:MealListComponent},
  {path:'addproducts',component:CardListComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
