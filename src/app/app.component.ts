import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form-New';

onsubmit=(userForm:NgForm)=>{
console.log(JSON.stringify(userForm.value));
}
@ViewChild('userForm') uf:NgForm
setValue(){
  this.uf.setValue(
    {"NameDetails":{"FirstName":"Rajesh","lastName":"RakeshJay"},
    "UserdName":"rajeshrakshan1989@gmail.com",
    "AddressDetails":{"Cityy":"cuddalore","ZipCode":"607002"},
    "CheckOut":true}
  ) 
}

setDefaultValue(){
  this.uf.setValue(
    {"NameDetails":{"FirstName":"","lastName":""},
    "UserdName":"",
    "AddressDetails":{"Cityy":"","ZipCode":""},
    "CheckOut":false}
  ) 
}
valueCorrection(){
  this.uf.form.patchValue(
    {"NameDetails":{"FirstName":"Rakshan","lastName":"Jayashree"}}
  ) 
}






}