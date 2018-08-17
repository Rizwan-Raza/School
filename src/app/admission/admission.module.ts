import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdmsNotSentComponent } from './adms-not-sent/adms-not-sent.component';
import { AdmsSentComponent } from './adms-sent/adms-sent.component';
import { Routes, RouterModule } from '@angular/router';
import { AdmissionComponent } from './admission.component';
const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: 'admission/sent', component: AdmsSentComponent },
  { path: 'admission/not-sent', component: AdmsNotSentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AdmsNotSentComponent, AdmsSentComponent]
})
export class AdmissionModule { }
