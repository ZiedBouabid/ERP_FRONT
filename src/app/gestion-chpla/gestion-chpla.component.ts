import { Component, OnInit } from '@angular/core';
import { MissionService } from '../mission.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { environment } from 'src/environments/environment';
import { User } from '../user.service';

@Component({
  selector: 'app-gestion-chpla',
  templateUrl: './gestion-chpla.component.html',
  styleUrls: ['./gestion-chpla.component.scss'],
})
export class GestionCHPLAComponent  implements OnInit {

  public titre = "Gestion Chargés planification"
  public chplans : User[] = [];



  constructor(private missionService: MissionService, private router: Router, private http: HttpClient, public datepipe: DatePipe) {

  }

  ngOnInit() {
    this.http.get<User[]>(environment.backend+`/users/getChplns/`).subscribe((res: any) => {
      console.log(res);
      this.chplans=res
  })


}

goToFournisseur(user : User){
    /* this.missionService.currentFournisseur = item;
    this.router.navigateByUrl('/modifierFournisseur', { state: { fournisseur: item }}); */
}


filterFournisseurs(competence :  any){

}


goAddFournisseur(){
  this.router.navigateByUrl('/addFournisseur')
}




}

export interface Fournisseur{
    id?:number | null ;
    nom: string;
    tele:string;
    email: string;
    type:string
    description: string
    certifications: Certification[]
    competences: Competence[]
    produits : Produit[]
 }

export interface Produit{
    id? : number | null ,
    nom : string;
}


export interface Certification{
    id? : number | null;
    type : string;
}

export interface Competence {
    id? : number | null ;
    type : string;
}



