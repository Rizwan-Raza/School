import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmissionComponent } from '../admission/admission.component';
import { AdmissionHomeComponent } from './admission-home/admission-home.component';
import { NewsComponent } from './news/news.component';
import { GalleryComponent } from './gallery/gallery.component';
import { SocialFeedsComponent } from './social-feeds/social-feeds.component';
import { NoticesComponent } from './notices/notices.component';
import { EventsComponent } from './events/events.component';
import { BannerComponent } from './banner/banner.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../about/about.component';

const routes: Routes = [
  { path: 'admission', component: AdmissionComponent },
  { path: 'about', component: AboutComponent }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    AdmissionHomeComponent,
    BannerComponent,
    EventsComponent,
    NewsComponent,
    GalleryComponent,
    SocialFeedsComponent,
    NoticesComponent
  ],
  exports: [
    AdmissionHomeComponent,
    BannerComponent,
    EventsComponent,
    NewsComponent,
    GalleryComponent,
    SocialFeedsComponent,
    NoticesComponent
  ]
})
export class HomeModule { }
