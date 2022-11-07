import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

    name = new FormControl('', Validators.required);
    age = new FormControl('', Validators.required);
    college =  new FormControl('', Validators.maxLength(15));
  
  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(15), Validators.minLength(5)]),
    address: new FormControl('')
  });
    
  onFormSubmit2(){
      console.log(this.myForm.value);
      
  }

//   onFormSubmit(){
//     console.log(this.name.value);
//     console.log(this.age.value);  
//     console.log(this.college.value);   
// }


  constructor() { }

  ngOnInit(): void {
  }

}
