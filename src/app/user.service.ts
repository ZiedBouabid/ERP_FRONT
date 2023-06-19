import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { take, map, switchMap } from 'rxjs/operators';
import { JwtHelperService } from "@auth0/angular-jwt";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';



const helper = new JwtHelperService();
export const TOKEN_KEY = 'jwt-token';

export interface User{
 email:string
 id: string
 tele? : string
 secondeRole? : string
 nom: string
 password: string
 prenom:string
 role:string
 }

 export interface createUser{
 email:string
 nom: string
 password: string
 prenom:string
 role:string
 }

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: Observable<any> = of(null);
  isAuthenticated: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public  userData = new BehaviorSubject(null);

  public userinfos : any = null  ;

  constructor(private storageService: StorageService, private http: HttpClient, private router: Router) {

    this.loadStoredToken();
  }

  async loadStoredToken() {
    const token = await this.storageService.get(TOKEN_KEY);
    if (token && token.value) {
      let decoded = helper.decodeToken(token.value);
      this.userData.next(decoded);
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }

  getUserToken() {
    return this.userData.getValue();
  }

  getUserData() {
    const email = this.getUserToken()?.['email'];
    return this.http.get<User>(`http://localhost:3000/users/getUser/${email}`)

  }


  logout() {
    this.storageService.remove(TOKEN_KEY);
    this.router.navigateByUrl('/connexion');
    this.userData.next(null);
    this.userinfos = null;
  }
}
