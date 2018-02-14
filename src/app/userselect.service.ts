import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/Rx';
import { Response } from "@angular/http";



@Injectable()
export class UserSelectService{
    userdata=[];
    genflag:string;
    constructor(private http:Http){}
    fname; lname; gen; dob; state; photo;
    addUser(fname,lname,gen,dob,state,photo){
       this.fname=fname;
       this.lname=lname;
       this.gen=gen;
       this.dob=dob;
       this.state=state;
       this.photo=photo;
    }

    selectUser(userSelect){
        this.userdata.push(userSelect);
       // console.log(this.userdata);
        return this.http.put('https://random-user-92.firebaseio.com/data.json',this.userdata);
    }
    getUser(){
        return this.http.get('https://random-user-92.firebaseio.com/data.json')
        .map(
            (response:Response)=>{
                const data=response.json();
                for(const users of data){
                    users.fname=users.fname+" "+users.lname;
                    users.gen=users.gen;
                    users.dob=users.dob;
                    users.state=users.state;
                }
                return data;
            }
        );
    }
}