import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Response } from '@angular/http';
import { HttpClient } from '@angular/common/http';
import { UserSelectService } from '../userselect.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl } from '@angular/forms';
// import { ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { Route } from '@angular/router';
// import { HttpResponse } from 'selenium-webdriver/http';
// import { HttpClient, HttpRequest } from 'selenium-webdriver/http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  state=[];
  myForm:FormGroup;
  constructor(private http: HttpClient, private userSelect: UserSelectService,
    private router: Router, private route: ActivatedRoute) { }
  data = Object;
  users = [];
  i = 0;
  page = 1;
  // genflag;
  genflag = this.userSelect.genflag;

    
  ngOnInit() {  
    //console.log(this.genflag);
    if (this.genflag == null) {
      // gender=male&
      //console.log(this.genflag);
      this.http.get('https://randomuser.me/api/?results=50')
        .subscribe(
        (res: Response) => {
          this.data = res['results'];
          while (this.i < this.data.length) {
            this.users.push(this.data[this.i]);
            this.state.push(this.data[this.i].nat);
            this.i++;
          }
        }
        );
    }
    else {
      console.log(this.genflag);
      this.http.get('https://randomuser.me/api/?results=50&gender=' + this.genflag)
        .subscribe(
        (res: Response) => {
          this.data = res['results'];
          while (this.i < this.data.length) {
            this.users.push(this.data[this.i]);
            this.state.push(this.data[this.i].nat);
            this.i++;
          }
        });
      this.genflag = null;
    }

  }
  //filter form 
  onFilter(filter: NgForm){
    console.log(filter.value.state);
    this.http.get('https://randomuser.me/api/?results=50&nat='+filter.value.state+'&gender='+filter.value.gender)
      .subscribe(
      (res: Response) => {
        // this.data
        const d = res['results'];
        // console.log(res['results']);
        this.users = d;
      });
  }

  onClickGen(gen) {
    this.genflag = gen;
    //console.log(this.genflag);
    this.http.get('https://randomuser.me/api/?results=50&gender=' + gen)
      .subscribe(
      (res: Response) => {
        // this.data
        const d = res['results'];
        // console.log(this.data);
        this.users = d;
        // while (this.i < this.data.length) {
        //   this.users.push(this.data[this.i]);
        //   console.log(this.users);
        //   this.i++;
        // }
      });
    // this.router.navigate(['/main/dashboard']);
  }
  udata = [];
  onSelect(fname, lname, gen, dob, state, photo) {
    this.userSelect.addUser(fname, lname, gen, dob, state, photo);
    this.router.navigate(['../../user']);
  }
}
