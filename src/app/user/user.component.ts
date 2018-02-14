import { Component, OnInit } from '@angular/core';
import { UserSelectService } from '../userselect.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userSelect:UserSelectService,private router:Router) {

  }
  fname; lname; gen; dob; state; photo;
  ngOnInit() {
    this.fname=this.userSelect.fname;
    this.lname=this.userSelect.lname;
    this.gen=this.userSelect.gen;
    this.dob=this.userSelect.dob;
    this.state=this.userSelect.state;
    this.photo=this.userSelect.photo;
  }
  gender;

  genflag=null;
  onSelect(gen){
    //console.log(gen);
    this.userSelect.selectUser({fname:this.fname,lname:this.lname,gen:this.gen,dob:this.dob,state:this.state})
    .subscribe(
      //(response)=>console.log(response),(error)=>console.log(error)
    );

    this.genflag=this.gen;
    this.userSelect.genflag=this.genflag;
    //console.log(this.genflag);
    this.router.navigate(['main/dashboard']);
  }
  onCancle(){
    this.router.navigate(['main/dashboard']);
  }
}
