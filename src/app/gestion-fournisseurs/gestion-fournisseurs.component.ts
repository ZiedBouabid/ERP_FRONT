import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-gestion-fournisseurs',
  templateUrl: './gestion-fournisseurs.component.html',
  styleUrls: ['./gestion-fournisseurs.component.scss'],
})
export class GestionFournisseursComponent  implements OnInit {

  public titre = "Gestion Fournisseurs"
  public fournisseurs : Fournisseur[] = [];

  constructor(private missionService: MissionService, private router: Router, private http: HttpClient, public datepipe: DatePipe) { 
  
  }

  ngOnInit() {
    this.http.get<Fournisseur[]>(`http://localhost:3000/fournisseur/getfournisseurs/`).subscribe((res: any) => {
      console.log(res);
      this.fournisseurs=res
  })
  
}

goToFournisseur(item : Fournisseur){
    this.missionService.currentFournisseur = item;
    this.router.navigateByUrl('/modifierFournisseur')
}


}





export interface Fournisseur{
    id:number;
    nom: string;
    tele:string;
    type:string
    description: string
    certifications: Certification[]
    competences: Competence[]
    produits : Produit[]
 }

export interface Produit{
    id : number,
    nom : string;
}


export interface Certification{
    id : number;
    type : string;
}

export interface Competence {
    id : number;
    type : string;
}
