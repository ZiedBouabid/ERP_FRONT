import { Injectable } from '@angular/core';
import { Fournisseur } from './gestion-fournisseurs/gestion-fournisseurs.component';
import { Mission } from './gestion-mission/gestion-mission.component';

@Injectable({
  providedIn: 'root'
})
export class MissionService {
   
  public currentMission : Mission  ;
  public currentFournisseur : Fournisseur  ;

  constructor() { }

  setMission(item:Mission){
      this.currentMission = item;
  }

  getMission(){
    return this.currentMission;
  }

  setFournisseur(item:Fournisseur){
    this.currentFournisseur = item;
  }

  getFournisseur(){
    return this.currentFournisseur;
}
}

