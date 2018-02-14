import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { MainComponent } from "./main/main.component";
import { UserComponent } from "./user/user.component";
import { HistoryComponent } from "./history/history.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AuthGuardService } from "./auth-guard.service";

const appRoutes:Routes=[
    {path:'',redirectTo:'/login',pathMatch:'full'},
    {path:'login',component:LoginComponent},
    {path:'main',component:MainComponent,canActivateChild:[AuthGuardService]
        ,children: [
        { path: 'dashboard', component: DashboardComponent },
        { path: 'history', component: HistoryComponent }
    ]
},
    {path:'user',component:UserComponent,canActivate:[AuthGuardService]}
];


@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}