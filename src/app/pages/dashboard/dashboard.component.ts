import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


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

  public maitres=[
    {
      name:"Dohn",
      prenom:"Doe",
      classe:"SIL A",
      Telephone:"+212604328985",
      Email:"johndoe@gmail.com",
      Statu:"Tutulaire"
    },
    {
      name:"John",
      prenom:"Doe",
      classe:"SIL A",
      Telephone:"+212604328985",
      Email:"johndoe@gmail.com",
      Statu:"Vacataire"
    },
    {
      name:"John",
      prenom:"Doe",
      classe:"SIL A",
      Telephone:"+212604328985",
      Email:"johndoe@gmail.com",
      Statu:"Tutulaire"
    },
  ]

  constructor(private router:Router) { }

  ngOnInit() {
    this.maitres.sort();
  }

  goToSingleClass() {
    this.router.navigateByUrl('user-profile');
  }
 
}
