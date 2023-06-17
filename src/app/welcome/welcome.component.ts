import { Component, OnInit,Input } from '@angular/core';
import { DataService } from '../data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserService } from '../user.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent  implements OnInit {

  public Email: string | undefined;
  public user: User | undefined;
  public titre = "Accueil"

  constructor( public userService: UserService,private http: HttpClient) { 
  
  }

  ngOnInit() {}

  

 

}

interface User{
  email:string
 id: string
 nom: string
 password: string
 prenom:string
 role:string
 }
