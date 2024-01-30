import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ClaimsFormComponent } from './claims/claims-form/claims-form.component';
import { ClaimsResultComponent } from './claims/claims-result/claims-result.component';
import { SubmitClaimFormComponent } from './claims/submit-claim-form/submit-claim-form.component';
import { LoginComponent } from './login/login.component';



const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  {path: 'login', component: LoginComponent},
  {path:'contact', component:ContactComponent},
 

  { path: 'viewClaims', component: ClaimsFormComponent,  data: {mode: 'billMode'} },
  { path: 'viewClaims/result', component: ClaimsResultComponent,  },

  { path: 'getClaimStatus', component: ClaimsFormComponent, data: { mode: 'claimStatusMode' } },
  { path: 'getClaimStatus/result', component: ClaimsResultComponent },

  { path: 'submitClaim', component: SubmitClaimFormComponent },
  { path: 'submitClaim/home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
