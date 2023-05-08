import { Component } from '@angular/core';
// import {MatDialog} from '@angular/material/dialog';
import { AddDataComponent } from '../add-data/add-data.component';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { SarvicesService } from '../sarvices/sarvices.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
adduserpop:boolean=false;
backcontent:boolean=true;
array:any=[]
  constructor(private router:Router,private fb:FormBuilder,private db:SarvicesService){}
  addform=this.fb.group({
    name:['',Validators.required],
    dob:['',Validators.required],
    email:['',Validators.required],
    number:['',Validators.required],
    sex:['',Validators.required],
    password:['',Validators.required]
  })
  ngOnInit():void{
    this.getAllUsers()
  }
  openDialog() {
   this.adduserpop=true;
   this.backcontent=false;
  }
  closeDialog(){
    this.adduserpop=false;
   this.backcontent=true;
  }
 Add(data:any){
  console.log(data)
  if(this.addform.valid){
    this.adduserpop=false;
    this.backcontent=true;
    this.db.addUser(data)
    // this.array.push(data)
  }
 }
 getAllUsers(){
  this.array=this.db.getUsers()
 }
 deleteUser(index:number):void{
  alert("are you sure to delete thos data")
this.db.deleteuser(index)
 }

 editUser(index:number):void{
  this.router.navigate(['/update'],{queryParams:{index:index}})
 }
 
}
