import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NabarModule } from './nabar/nabar.module';
import { ProductsModule } from './products/products.module';
import { MealsModule } from './meals/meals.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CardsModule } from './cards/cards.module';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NabarModule,
    ProductsModule,
    MealsModule,
    ReactiveFormsModule,
    CardsModule
    
    
    
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
