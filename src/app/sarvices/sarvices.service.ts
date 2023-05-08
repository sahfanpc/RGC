import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SarvicesService {
list:Array<any>=[
]
userList:Array<any>=[]
  constructor(private router:Router) { }

  registerData(data:any):void{
    console.log(data)
this.list.push(data)
  }

  addUser(data:any){
    this.userList.push(data)
    // console.log(this.userList);
  }

  deleteuser(index:number){
    // alert("are you sure to delete thos data")
  this.userList.splice(index,1);
  }

  getUsers(){
    return this.userList;
  }

loginData(data:any){
  console.log(data)
  if(this.list.find( datas => datas.email === data.email)){
    alert('login secess')
    this.router.navigateByUrl('dashboard')
  }else{
    alert('fail')
  }

}
getUser(index:number){
  const arr=this.userList[index]
  return arr
 }

 updateUser(index:number,data:any,){
this.userList[index]=data
this.router.navigateByUrl('dashboard')

 }
}
