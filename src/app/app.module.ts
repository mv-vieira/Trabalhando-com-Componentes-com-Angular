import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EntryDataModule } from './entry-data/entry-data.module';
import { ButtonModule } from './button/button.module';

@NgModule({
  imports:  [ BrowserModule, FormsModule, AppRoutingModule, ButtonModule, EntryDataModule ],
  declarations: [ AppComponent,],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
