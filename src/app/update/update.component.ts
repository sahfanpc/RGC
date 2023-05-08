import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { SarvicesService } from '../sarvices/sarvices.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent {

  constructor(private router:Router,private fb:FormBuilder,private db:SarvicesService,private route:ActivatedRoute){}
contactIndex:Number | undefined;
user:any;
name:any;
dob:any;
email:any;
number:any;
sex:any;
  addform=this.fb.group({
    name:['',Validators.required],
    dob:['',Validators.required],
    email:['',Validators.required],
    number:['',Validators.required],
    sex:['',Validators.required],
  })
ngOnInit():void{
  this.checkParams();
  this.getUser()
}

  Add(data:any){
    if(this.addform.valid){
this.db.updateUser(this.contactIndex as number,data);

    }else{
      alert('not')
    }
   
   }

  getUser(){
this.user = this.db.getUser(this.contactIndex as number);
// console.log(this.user);
this.name =this.user.name;
this.dob =this.user.dob;
this.email =this.user.email;
this.number =this.user.number;
this.sex =this.user.sex;

  }

   checkParams():void{
    this.route.queryParams.subscribe((res:Params)=>{
     
      this.contactIndex = parseInt(res['index'])
      console.log(this.contactIndex);
    })
   }

}
