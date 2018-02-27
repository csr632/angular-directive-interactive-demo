import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { BComponent } from './BComponent/b.component';
import { CDirective } from './CDirective/c.directive';

@NgModule({
  declarations: [
    AppComponent,
    BComponent,
    CDirective,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
