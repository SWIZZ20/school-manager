import { Component, OnInit } from '@angular/core';
import { Master, MasterService } from 'src/Share/master.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public classes=
  [
    {name:"SIL A"}, {name:"CEP"}, {name:"CE1"}, {name:"CE2"}
  ];

   firstName:string;
   lastName:string;
   statu:string;
   salle:string;
   phone:string;
   email:string;
   password:string;


  constructor(private masterServ:MasterService) { 
    
  }

  ngOnInit() {
  }

  addNewMaster(){
    console.log(this.firstName);
    //this.masterServ.addNewMaster(this.firstName,this.lastName,this.statu,this.salle,this.phone,this.email);    
  }

}
