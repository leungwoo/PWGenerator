import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Passgen2Component } from './passgen2/passgen2.component';
import { Passgen1Component } from './passgen1/passgen1.component';

@NgModule({
  declarations: [
    AppComponent,
    Passgen2Component,
    Passgen1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
