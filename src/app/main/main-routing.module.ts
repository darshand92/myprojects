import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { RouterModule } from "@angular/router";

import { DashboardComponent } from "../dashboard/dashboard.component";
import { HistoryComponent } from "../history/history.component";
import { MainComponent } from "./main.component";

const appRoutes1: Routes = [

    {
        path: 'main', component: MainComponent, children: [
            { path: 'dashboard', component: DashboardComponent },
            { path: 'history', component: HistoryComponent }
        ]
    },

];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes1)],
    exports: [RouterModule]
})
export class MainRoutingModule {

}