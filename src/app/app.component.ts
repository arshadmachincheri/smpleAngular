import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'amazone2.1';
//   getuserfromdata(data:any){
// console.log(data)
//   }
name = new FormControl('');
result:any;
helloworld(){
  const display=this.name.value;
  this.result=display
  console.log("jkk",this.result)
}

}
