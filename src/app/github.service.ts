import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable({
 providedIn: 'root'
})

export class GithubService {
 apiUrl = environment.apiUrl;
 private username: string;
 private repo: string;


 constructor(private http: HttpClient) {
   console.log("ready");
   this.username = "Le07ah57532538";
   this.repo = '';
 }

 getUser(): any {
   return this.http.get("https://api.github.com/users/" + this.username + "?access_token=4af120d6cc58e9f5e1d8fc7d97d2b42d6515ff87")
   .pipe((res =>res));
 }

 getRepos(): any {
   return this.http.get("https://api.github.com/users/" + this.username + "/repos?access_token=4af120d6cc58e9f5e1d8fc7d97d2b42d6515ff87")
   .pipe((res => res));
 }
 updateUser(username:string){
   this.username = username;
 }

}