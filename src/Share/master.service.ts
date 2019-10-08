import { Injectable } from '@angular/core';

export interface Master{
  firstName:string;
  lastName:string,
  statu:string,
  salle:string,
  phone:string,
  email:string,
  password:string,
}

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  master:Master[];

  constructor() {
    this.master=[
    {
      firstName:'Dohn',
      lastName:"Doe",
      statu:"Tutulaire",
      salle:"SIL A",
      phone:"+212604328985",
      email:"johndoe@gmail.com",
      password:"motdepasse"
    },
    {
      firstName:"John",
      lastName:"Doe",
      statu:"Tutulaire",
      salle:"SIL A",
      phone:"+212604328985",
      email:"johndoe@gmail.com",
      password:"motdepasse"
    },
    {
      firstName:"Dohn",
      lastName:"Doe",
      statu:"Tutulaire",
      salle:"SIL A",
      phone:"+212604328985",
      email:"johndoe@gmail.com",
      password:"motdepasse"
    }]
   }

  addNewMaster(firstName:string, lastName:string, statu:string, salle:string,phone:string,email:string){
    this.master.push({
      firstName:firstName,
      lastName:lastName,
      statu:statu,
      salle:salle,
      phone:phone,
      email:email,
      password:email,
    });
    console.log(this.master);
  }
}
