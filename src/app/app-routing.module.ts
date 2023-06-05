import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { HomeComponent } from './home/home.component';
import { FichiersComponent } from './fichiers/fichiers.component';

const appRoutes: Routes = [
  {path:'', redirectTo: 'home', pathMatch: 'full'},
{path:'login', component: LoginComponent},
{path:'inscription', component:InscriptionComponent, },
{path:'fichiers', component: FichiersComponent },
{path:'home', component: HomeComponent }];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
    
  ],
  declarations:[   
    InscriptionComponent,
    HomeComponent,
    LoginComponent,
    FichiersComponent
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

