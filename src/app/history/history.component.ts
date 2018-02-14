import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { UserSelectService } from '../userselect.service';
import { Response } from '@angular/http';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})


export class HistoryComponent implements OnInit {

  constructor(private http:Http, private userSelect:UserSelectService) { }
  users=[];
  ngOnInit() {
    // 
    this.userSelect.getUser()
    .subscribe(
      (user:any[])=>this.users=user,
      (error)=>console.log(error)
    );
  }

}
