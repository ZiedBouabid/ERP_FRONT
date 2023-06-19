import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AjouterFournisseurComponent } from './ajouter-fournisseur/ajouter-fournisseur.component';
import { AuthGuard } from './auth.guard';
import { ConnexionComponent } from './connexion/connexion.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { GestionFournisseursComponent } from './gestion-fournisseurs/gestion-fournisseurs.component';
import { GestionMissionComponent } from './gestion-mission/gestion-mission.component';
import { HeaderComponent } from './header/header.component';
import { ModifierFournisseurComponent } from './modifier-fournisseur/modifier-fournisseur.component';
import { ModifierMissionComponent } from './modifier-mission/modifier-mission.component';
import { RoleGuard } from './role.guard';
import { WelcomeComponent } from './welcome/welcome.component';
import { GestionCHPLAComponent } from './gestion-chpla/gestion-chpla.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'connexion',
    pathMatch: 'full'
  },
  {
    path:'connexion',
    component: ConnexionComponent,
  },
  {path: 'welcome',
    component: WelcomeComponent,
    canActivate : [AuthGuard,RoleGuard],
    data: {
      roles: ['Admin','RSPLA','CHPLA']
    }
  },
  {path: 'createUser',
  component: CreateUserComponent,
  },
  {path: 'gestionMission',
  component: GestionMissionComponent,
  canActivate : [AuthGuard,RoleGuard],
  data: {
    roles: ['Admin','RSPLA','CHPLA']
  }
  },
  {path: 'forgetPassword',
  component: ForgetPasswordComponent,
  },
  {path: 'modifierMission',
  component: ModifierMissionComponent,
  canActivate : [AuthGuard,RoleGuard],
  data: {
    roles: ['Admin','RSPLA','CHPLA']
  }

  },
  {path: 'gestionFournisseurs',
  component: GestionFournisseursComponent,
  canActivate : [AuthGuard,RoleGuard],
  data: {
    roles: ['Admin','RSPLA','CHPLA']
  }
  },
  {path: 'modifierFournisseur',
  component: ModifierFournisseurComponent,
  canActivate : [AuthGuard,RoleGuard],
  data: {
    roles: ['Admin','RSPLA']
  }
  },
  {path: 'addFournisseur',
  component: AjouterFournisseurComponent,
  canActivate : [AuthGuard,RoleGuard],
  data: {
    roles: ['Admin','RSPLA']
  }
  },
  {path: 'gestionCHplans',
  component: GestionCHPLAComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
