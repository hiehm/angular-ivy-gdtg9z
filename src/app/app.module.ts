import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SharematerialModule } from '../sharematerial/share.module';

@NgModule({
  imports: [BrowserModule, FormsModule, SharematerialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
