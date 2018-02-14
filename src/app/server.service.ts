import { Http } from "@angular/http";
import { Response } from "@angular/http";
import { Injectable } from "@angular/core";

@Injectable()
export class ServerService{

    constructor(private http:Http){}
    data:Object;

    getData(){
        this.http.request('https://randomuser.me/api/')
        .subscribe(
            (res:Response)=>{
                this.data=res.json();
            }
        );
    }
}