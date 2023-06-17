import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { filter, map, take } from 'rxjs';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-gestion-mission',
  templateUrl: './gestion-mission.component.html',
  styleUrls: ['./gestion-mission.component.scss'],
})
export class GestionMissionComponent  implements OnInit {
  public titre = "Gestion Mission"
  public missions : Mission[] = [];

  constructor(private missionService:MissionService, private router: Router, private http: HttpClient, public datepipe: DatePipe) { 
  
  }

  ngOnInit() {
    this.http.get<Mission[]>(`http://localhost:3000/missions/getMissions/`).subscribe((res: any) => {
      console.log(res);
      this.missions=res
  })
  
}

goToMission(item : Mission){
    this.missionService.currentMission = item;
    this.router.navigateByUrl('/modifierMission')
}

}



export interface Mission{
 id:number;
 client: string;
 fournisseur:string;
 type:string
 description: string
 datedebut: Date
 datefin: Date
 statut : string
 }
