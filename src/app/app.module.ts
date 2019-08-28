import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AttrDirective } from './attr.directive';
import { StrctDirective } from './strct.directive';
import { Topic1Component } from './topic1/topic1.component';

@NgModule({
  declarations: [
    AppComponent,
    AttrDirective,
    StrctDirective,
    Topic1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
