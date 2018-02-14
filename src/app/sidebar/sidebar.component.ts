import { Component, OnInit } from '@angular/core';
import { UserSelectService } from '../userselect.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private userSelect:UserSelectService) { }
  
  ngOnInit() {
  }

  onDashboard(){
this.userSelect.genflag=null;
  }
}