import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SarvicesService } from '../sarvices/sarvices.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent {
constructor(private router:Router,private fb:FormBuilder,private db:SarvicesService){}
loginform=this.fb.group({
  email:['',Validators.required],
  password:['',Validators.required]
})
ngOnInit():void{}
Submit(data:any){
  // console.log(data)
  if(this.loginform.valid){
this.db.loginData({email:data.email,password:data.password})
// this.router.navigateByUrl('dashboard')
  }else{
    alert('not valid')
  }
  
}
}
