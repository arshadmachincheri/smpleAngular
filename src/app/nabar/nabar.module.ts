import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarlistComponent } from './navbarlist/navbarlist.component';
import {MatMenuModule} from '@angular/material/menu';


@NgModule({
  declarations: [
    NavbarlistComponent
  ],
  imports: [
    CommonModule,
    MatMenuModule

  ],
  exports:[
    NavbarlistComponent
  ]
})
export class NabarModule { }
