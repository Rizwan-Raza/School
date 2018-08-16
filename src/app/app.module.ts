import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { FacultyComponent } from './faculty/faculty.component';
import { SpVcComponent } from './sp-vc/sp-vc.component';
import { ContactComponent } from './contact/contact.component';
import { ContactModule } from './contact/contact.module';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { FacultyModule } from './faculty/faculty.module';
import { SpVcModule } from './sp-vc/sp-vc.module';
import { AdmissionComponent } from './admission/admission.component';
import { AdmissionModule } from './admission/admission.module';


const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "about", component: AboutComponent},
  {path: "admission", component: AdmissionComponent},
  {path: "faculty", component: FacultyComponent},
  {path: "sp-vc", component: SpVcComponent},
  {path: "contact", component: ContactComponent},
  {path: '', loadChildren: './home/home.module#HomeModule'}
];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    FacultyComponent,
    SpVcComponent,
    ContactComponent,
    AdmissionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HomeModule,
    AboutModule,
    FacultyModule,
    ContactModule,
    SpVcModule,
    AdmissionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
