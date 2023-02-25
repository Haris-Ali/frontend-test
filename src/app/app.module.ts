import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesComponent } from './components/features/features.component';
import { LocationsComponent } from './components/locations/locations.component';
import { InfoComponent } from './components/info/info.component';
import { ServicesComponent } from './components/services/services.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { CertificateComponent } from './components/certificate/certificate.component';
import { SuccessStoriesComponent } from './components/success-stories/success-stories.component';
import { StepsComponent } from './components/steps/steps.component';
import { InfoNewComponent } from './components/info-new/info-new.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroSectionComponent,
    FeaturesComponent,
    LocationsComponent,
    InfoComponent,
    ServicesComponent,
    FooterComponent,
    ContactComponent,
    CertificateComponent,
    SuccessStoriesComponent,
    StepsComponent,
    InfoNewComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
