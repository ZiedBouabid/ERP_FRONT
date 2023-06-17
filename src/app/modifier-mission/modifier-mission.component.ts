import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';
import { Mission } from '../gestion-mission/gestion-mission.component';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-modifier-mission',
  templateUrl: './modifier-mission.component.html',
  styleUrls: ['./modifier-mission.component.scss'],
})
export class ModifierMissionComponent  implements OnInit {
  missionForm : FormGroup;
  isSubmitted = false;
  public titre = "Modifier Mission"
  public mission : Mission   
  
  constructor(private missionService:MissionService,public datepipe: DatePipe,private router:Router,private loadingCtrl: LoadingController,public formBuilder: FormBuilder,private http: HttpClient,private navCtrl: NavController) {
    this.mission = this.missionService.currentMission;
   }

  ngOnInit() {
    this.missionForm = this.formBuilder.group({
      client: [''],
      datedebut: [''],
      datefin: [''],
      type: ['PHP' ],
      fournisseur: [''],
    });
    console.log(this.mission)
    if(this.mission){
      this.missionForm.get('client')?.setValue(this.mission.client)
      this.missionForm.get('type')?.setValue(this.mission.type)
      this.missionForm.get('fournisseur')?.setValue(this.mission.fournisseur)
      }
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.missionForm.valid) {
    } else {
      
    }
  }

  get errorControl() {
    return this.missionForm.controls;
  }



  compareTech(t1: string, t2: string) {
     return (t1 && t2) && t1 === t2;;
  } 

}
