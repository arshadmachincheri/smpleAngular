import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { FormGroup, FormControl, UntypedFormArray, UntypedFormGroup, UntypedFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-card-list',
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  attachment: any={};
  profileForm = new FormGroup({
    title: new FormControl(''),
    price: new FormControl(''),
    description:new FormControl(''),
    image:new FormControl(''),
    category:new FormControl(''),
    attachment:new FormControl(this.attachment)
  });
  productlist:any
  rtiRequestForm = new UntypedFormGroup({
    userAttachments: new UntypedFormArray([]),
  });

  cartitems:any={};
  constructor(private ServicesService:ServicesService,private formBuilder:UntypedFormBuilder) { }

  ngOnInit(): void {
    this.ServicesService.getcard().subscribe((data)=>{
      this.cartitems=data;
      console.log('&&&&&',this.cartitems=data)
     })

     
  }
 
   

  onSave(){
    const Formdata=this.profileForm.value;
    console.log(Formdata,"fiormdta")
    this.ServicesService.addproducts(Formdata).subscribe((data: any)=>{
      this.productlist=data;

      console.log("addproduct",this.productlist=data)
    })
  }

  attachFile(event: any) {
    let files = event.target.files;
    if (files) {
      if (files.length > 0) {
        let userDocuments = this.userDocuments;
        if (userDocuments.length > 0) {
          for (let x in userDocuments) {
            userDocuments.removeAt(parseInt(x));
          }
        }
      }
      for (let file of files) {
        let reader = new FileReader();
        reader.onload = (e: any) => {
          this.userDocuments.push(
            this.createUserDocument({
              data: e.target.result.replace('data:', '').replace(/^.+,/, ''),
              contentType: file?.type,
              fileName: file?.name,
            })
          );
        };
        reader.readAsDataURL(file);
      }
    }
    this.getAttachedData();
  }
  get userDocuments(): UntypedFormArray {
    return this.rtiRequestForm.get('userAttachments') as UntypedFormArray;
  }
  getAttachedData() {
    let requestData = this.rtiRequestForm.getRawValue();
    requestData.userAttachments = requestData.userAttachments.map(
      (doc: any) => {
        if (doc.hasOwnProperty('data')) {
          this.attachment = {
            data: doc.data,
            contentType: doc.contentType,
          };
        }
        return doc;
      }
    );
  }
  createUserDocument(data: any): UntypedFormGroup {
    return this.formBuilder.group(data);
  }
}
