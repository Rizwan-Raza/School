import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SentComponent } from './sent/sent.component';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact.component';
import { NotSentComponent } from './not-sent/not-sent.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'contact/sent', component: SentComponent },
  { path: 'contact/not-sent', component: NotSentComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SentComponent, NotSentComponent]
})
export class ContactModule { }
