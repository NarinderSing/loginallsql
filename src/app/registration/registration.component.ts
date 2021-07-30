import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public registrationForm = new FormGroup({});
  public submitBtn = false;

  constructor(private _formBulid:FormBuilder,
    private _service:UserService) { }

  ngOnInit(): void {
    this.registrationForm = this._formBulid.group({
      name:['',Validators.required],
      email:['',Validators.required],
      phone:['',Validators.required],
      password:['',Validators.required],
    });
  }

  formBtn(){
    this.submitBtn = true
   
    console.log(this.registrationForm.value);
  }

  get getFormValidation(){
    return this.registrationForm.controls;
  }

}
