import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, NavController } from '@ionic/angular';
import { Mission } from '../gestion-mission/gestion-mission.component';
import { Fournisseur } from '../gestion-fournisseurs/gestion-fournisseurs.component';
import { environment } from 'src/environments/environment';
import { UserService } from '../user.service';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent  implements OnInit {

  public titre = "Créer Utilisateur"

  public user : User = {
        id: 0,
        nom: '',
        prenom: '',
        role: '',
        email: '',
        password: '',
        tele : ''
  }

  public user_origine : User = {
        id: 0,
        nom: '',
        prenom: '',
        role: '',
        email: '',
        password: '',
        tele : ''
  }


constructor(public userService:UserService,public activatedRoute: ActivatedRoute,private router:Router,private  alertController: AlertController,private loadingCtrl: LoadingController,public formBuilder: FormBuilder,private http: HttpClient) {
}

ngOnInit() {

}

saveUser(){
this.http.post(environment.backend +  '/users/addUser/', this.user).subscribe((res: any) => {
  this.user = this.user_origine
  console.log(res);

},
(err) => {
  this.alertController.create({
    message: 'Ajout utilisateur echouée !',
    buttons: ['OK']
  }).then(res => {

    res.present();

  });
}
);

}


}



export interface User{

  id: number;
  nom: string;

  prenom: string;

  role: string;

  email: string;


  password: string;

  tele : string;

}
