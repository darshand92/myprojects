import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import { AuthGuardService } from "./auth-guard.service";
import { Router } from "@angular/router";
@Injectable()
export class UserService {
    
    userData=[
        {
            username:'admin',
            password:'admin'
        },
        {
            username:'darshan',
            password:'darshan'
        }
    ];
    i=null;
    status:boolean;
    constructor(private authService:AuthService,private authGuard:AuthGuardService,private router:Router){}
    onLogin(unm,pass){
        // console.log(unm,pass);
        //console.log(this.userData[0].username);
        this.i=0;
        while(this.i<this.userData.length){
            // console.log(this.i);
            if(this.userData[this.i].username==unm && this.userData[this.i].password==pass){
                console.log(unm,this.i,this.userData[this.i].username);
                this.authService.Login();
                const exp_time= 60000;
                localStorage.setItem('exp_time', exp_time.toString())
                this.router.navigate(['/main']);
                break;
            }
            this.i++;
            // break;
        }
        // this.status=this.authGuard.canActivate();
   }
}