import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SarvicesService } from '../sarvices/sarvices.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent {
constructor(private router:Router,private fb:FormBuilder,private db:SarvicesService){}
registerform=this.fb.group({
  name:['',Validators.required],
  dob:['',Validators.required],
  email:['',Validators.required],
  number:['',Validators.required],
  sex:['',Validators.required],
  password:['',Validators.required]
})

ngOnInit():void{

}
Register(data:any){
// console.log(data)
if(this.registerform.valid){
  this.db.registerData({name:data.name,dob:data.dob,email:data.email,number:data.number,sex:data.sex,password:data.password})
  this.router.navigateByUrl('')
}else{
  alert("not valid")
}

}
}
