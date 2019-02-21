import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ArchwizardModule } from 'angular-archwizard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ArchwizardModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
