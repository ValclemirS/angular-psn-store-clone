import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './components/card/card.component';
import { MenuBarComponent } from './components/menu-bar/menu-bar.component';
import { CardLabelComponent } from './components/card/card-label/card-label.component';
import { CardPricingComponent } from './components/card/card-pricing/card-pricing.component';
<<<<<<< HEAD
import { ContentComponent } from './pages/content/content.component';
=======
import { CardDestaqueComponent } from './components/card-destaque/card-destaque.component';
>>>>>>> f9bae08b7612d32a404d72b08159d2e07099542e

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    MenuBarComponent,
    CardLabelComponent,
    CardPricingComponent,
<<<<<<< HEAD
    ContentComponent
=======
    CardDestaqueComponent
>>>>>>> f9bae08b7612d32a404d72b08159d2e07099542e
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
