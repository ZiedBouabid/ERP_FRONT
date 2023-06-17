import { DatePipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { Fournisseur } from '../gestion-fournisseurs/gestion-fournisseurs.component';
import { MissionService } from '../mission.service';

@Component({
  selector: 'app-ajouter-fournisseur',
  templateUrl: './ajouter-fournisseur.component.html',
  styleUrls: ['./ajouter-fournisseur.component.scss'],
})
export class AjouterFournisseurComponent  implements OnInit {

  fournisseurForm : FormGroup;
  isSubmitted = false;
  public titre = "Modifier Fournisseur"
  public fournisseur : Fournisseur   
  
  constructor(private missionService:MissionService,public datepipe: DatePipe,private router:Router,private loadingCtrl: LoadingController,public formBuilder: FormBuilder,private http: HttpClient) {
    this.fournisseur = this.missionService.currentFournisseur;
   }

  ngOnInit() {
    this.fournisseurForm = this.formBuilder.group({
      nom: [''],
      description: [''],
      tele: [''],
      certification: ['PHP' ],
      competence: [''],
    });

    if(this.fournisseur){
      this.fournisseurForm.get('nom')?.setValue(this.fournisseur.nom)
      this.fournisseurForm.get('certification')?.setValue(this.fournisseur.certifications)
      this.fournisseurForm.get('competence')?.setValue(this.fournisseur.competences)
      this.fournisseurForm.get('tele')?.setValue(this.fournisseur.tele)
      this.fournisseurForm.get('description')?.setValue(this.fournisseur.description)
      }
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.fournisseurForm.valid) {
    } else {
      
    }
  }

  get errorControl() {
    return this.fournisseurForm.controls;
  }



  compareTech(t1: string, t2: string) {
     return (t1 && t2) && t1 === t2;;
  } 
}
