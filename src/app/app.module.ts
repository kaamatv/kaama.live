import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { LogoComponent } from './components/logo/logo.component'
import { ImprintComponent } from './pages/imprint/imprint.component'
import { HomeComponent } from './pages/home/home.component'
import { TitleHelper } from './helpers/title-helper'

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    ImprintComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [TitleHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
