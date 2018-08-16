import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhoWeAreComponent } from './who-we-are/who-we-are.component';
import { LabelComponent } from './label/label.component';
import { WhatWeOfferComponent } from './what-we-offer/what-we-offer.component';
import { UniqueFeaturesComponent } from './unique-features/unique-features.component';
import { TeamComponent } from './team/team.component';
import { WhyWeBestComponent } from './why-we-best/why-we-best.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    WhoWeAreComponent, 
    LabelComponent, 
    WhatWeOfferComponent, 
    UniqueFeaturesComponent, 
    TeamComponent, 
    WhyWeBestComponent, 
    TestimonialsComponent
  ],
  exports: [
    WhoWeAreComponent, 
    LabelComponent, 
    WhatWeOfferComponent, 
    UniqueFeaturesComponent, 
    TeamComponent, 
    WhyWeBestComponent, 
    TestimonialsComponent
  ]
})
export class AboutModule { }
