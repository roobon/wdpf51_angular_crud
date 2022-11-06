import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent implements OnInit {

  myForm = new FormGroup({
    name: new FormControl(''),
    series: new FormControl('')
  });
    
  onFormSubmit(){
      console.log(this.myForm.value);   
  }

  constructor() { }

  ngOnInit(): void {
  }

}
