import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { PreLaunchComponent } from './pre-launch/pre-launch.component';
import { AllComponentsComponent } from './all-components/all-components.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PreLaunchComponent,
    AllComponentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
