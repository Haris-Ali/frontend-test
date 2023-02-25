import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { FeaturesComponent } from './components/features/features.component';
import { LocationsComponent } from './components/locations/locations.component';
import { InfoComponent } from './components/info/info.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HeroSectionComponent, FeaturesComponent, LocationsComponent, InfoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
