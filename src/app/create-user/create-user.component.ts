import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from "@angular/forms";
import { Router } from '@angular/router';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss'],
})
export class CreateUserComponent  implements OnInit {

  createUserForm : FormGroup;
  isSubmitted = false;
  public titre = "Ajouter utilisateur"

  constructor(private router:Router,private loadingCtrl: LoadingController,public formBuilder: FormBuilder,private http: HttpClient,private navCtrl: NavController) {

   }

  ngOnInit() {
    this.createUserForm = this.formBuilder.group({
      nom: [''],
      prenom: [''],
      password: [''],
      role: [null, [ Validators.required ] ],
      tele: [''],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$'),
        ],
      ]
    });
  }

  submitForm() {
    this.isSubmitted = true;
    if (this.createUserForm.valid) {
      this.createAccount();
    } else {
      
    }
  }

  get errorControl() {
    return this.createUserForm.controls;
  }

  async createAccount(){
    let credentials = {
      nom:this.createUserForm.controls['nom'].value,
      prenom:this.createUserForm.controls['prenom'].value,
      role:this.createUserForm.controls['role'].value,
      
      email: this.createUserForm.controls['email'].value,
      tele: this.createUserForm.controls['tele'].value,
      password: this.createUserForm.controls['password'].value
    }
    console.log(credentials);
    const loading = await this.loadingCtrl.create({
      message: 'Création en cours...',
      
    });
    loading.present();
    this.http.post('http://localhost:3000/users/addUser', credentials).subscribe((res) => {    
      loading.dismiss();
      this.router.navigate(['/welcome'], {replaceUrl: true});
    });
    //this.router.navigateByUrl('/welcome')
  }

 

  compareTech(t1: string, t2: string) {
     return (t1 && t2) && t1 === t2;;
  } 

}
