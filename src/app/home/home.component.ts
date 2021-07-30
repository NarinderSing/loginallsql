import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData:any= [];
  studendForm=new FormGroup({});

  constructor(private _service: UserService,private formbulid:FormBuilder) {
    this.studendForm=this.formbulid.group({
      name:['',Validators.required],
      email:['',Validators.required],
    })
   }

  ngOnInit(): void {
    this._service.getUserData().subscribe(data => {
      console.log(data)
      this.userData = data;
    })
  }

  formBtn(){
    this._service.postUserData(this.studendForm.value).subscribe((data)=>{
      console.log(data)
    })

  }

}
