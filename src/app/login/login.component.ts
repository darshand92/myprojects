import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
// import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { AuthService } from '../auth.service';
// import { CanActivate } from '@angular/router/src/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  //LoginSt=false;
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    const exp_time = localStorage.getItem('exp_time');
    const time = +new Date().getMilliseconds() + +exp_time;

    if (exp_time == '') {
      this.authService.Logout();
      this.router.navigate(['/']);
    }
    else {
      if (+exp_time < time) {
        this.authService.Login();
        this.router.navigate(['main']);
      }
      else {
        this.authService.Logout();
        this.router.navigate(['/']);
      }
    }

    this.myForm = new FormGroup({
      'userData': new FormGroup({
        'username': new FormControl(null),
        'password': new FormControl(null)
      })
    });

  }

  onLogin() {
    // this.authService.isAuthenticated();
    // this.router.navigate(['main']);
    //console.log(this.myForm.value.userData.username,this.myForm.value.userData.password);
    this.userService.onLogin(this.myForm.value.userData.username, this.myForm.value.userData.password);
  }
}
