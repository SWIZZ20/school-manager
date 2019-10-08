import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterService } from 'src/Share/master.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  public classes=[
    {
      id:1,
      name:"SIL A",
      master:"John Doe",
      nbStudents:20,
    },
    {
      id:2,
      name:"CEP",
      master:"John Doe",
      nbStudents:20,
    },
    {
      id:3,
      name:"CE1",
      master:"John Doe",
      nbStudents:20,
    },
  ]

  public maitres=[]

  constructor(private router:Router, private masterSev:MasterService) { }

  ngOnInit() {
    this.maitres.sort();
    this.maitres=this.masterSev.master;
  }

  goToSingleClass() {
    this.router.navigateByUrl('user-profile');
  }
 
}
