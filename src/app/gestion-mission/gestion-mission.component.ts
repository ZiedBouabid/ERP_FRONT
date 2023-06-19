import { Fournisseur } from './../gestion-fournisseurs/gestion-fournisseurs.component';
import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, take } from 'rxjs';
import { MissionService } from '../mission.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-gestion-mission',
  templateUrl: './gestion-mission.component.html',
  styleUrls: ['./gestion-mission.component.scss'],
})
export class GestionMissionComponent  implements OnInit {

  public titre = "Gestion Missions"
  public missions : Mission[] = [];
  public missions_origine : Mission[] = [];



  constructor(private missionService: MissionService, private router: Router, private http: HttpClient, public datepipe: DatePipe) {

  }

  ngOnInit() {
    this.http.get<Mission[]>(environment.backend+`/missions/getMissions/`).subscribe((res: any) => {
      console.log(res);
      this.missions=res
      this.missions_origine=res
  })
}

  goToMission(item : Mission){

      this.router.navigateByUrl('/modifierMission', { state: { mission: item }});
  }

  filtermissions(statut : any){
    if(statut){
      this.missions = this.missions_origine.filter(mission => mission.statut == statut)
    }
    else{
      this.missions = this.missions_origine;
    }
  }

}

export interface Mission{
    id:number | null ;
    type: string;
    client : string ;
    description:string;
    datedebut:string
    datefin: string
    statut : string
    produits : Produit[]
 }


 export interface Produit{
  id:number | null ;
  nom : string;
  fournisseurs: Fournisseur[]
}
