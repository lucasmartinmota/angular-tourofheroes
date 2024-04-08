import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    AppComponent,
    HeroesListComponent,
    HeroViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
