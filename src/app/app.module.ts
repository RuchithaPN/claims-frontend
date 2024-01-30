import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ContactComponent } from './contact/contact.component';
import { ClaimsFormComponent } from './claims/claims-form/claims-form.component';
import { AlertComponent } from './others/alert/alert.component';
import { LoadingSpinnerComponent } from './others/loading-spinner/loading-spinner.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { ClaimsResultComponent } from './claims/claims-result/claims-result.component';
import { SubmitClaimFormComponent } from './claims/submit-claim-form/submit-claim-form.component';
import { LoginComponent } from './login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ContactComponent,
    ClaimsFormComponent,
    AlertComponent,
    LoadingSpinnerComponent,
    ClaimsResultComponent,
    SubmitClaimFormComponent,
    LoginComponent
  ],
  imports: [
      BrowserModule, 
      AppRoutingModule,
      FormsModule,
      HttpClientModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatInputModule,
      ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
