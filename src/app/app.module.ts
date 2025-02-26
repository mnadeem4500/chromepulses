import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainShinjiruComponent } from './main-shinjiru/main-shinjiru.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarShinjiruComponent } from './navbar-shinjiru/navbar-shinjiru.component';
import { ContentShinjiruComponent } from './content-shinjiru/content-shinjiru.component';
import { ShinjiruComponent } from './shinjiru/shinjiru.component';
import { FooterShinjiruComponent } from './footer-shinjiru/footer-shinjiru.component';

@NgModule({
  declarations: [
    AppComponent,
    MainShinjiruComponent,
    NavbarShinjiruComponent,
    ContentShinjiruComponent,
    ShinjiruComponent,
    FooterShinjiruComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
