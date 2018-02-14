export class AuthService{
    LoggedIn=false;
    isAuthenticated(){
        const promise=new Promise(
            (resolve,reject)=>{
                setTimeout(()=>{
                    resolve(this.LoggedIn);
                },800);
            }
        );
        return promise;
    }
    Login(){
      this.LoggedIn=true;

    }
    Logout(){
        this.LoggedIn=false;
    }
}