import { NgModule }           from '@angular/core';
import { BrowserModule }      from '@angular/platform-browser';
/* App Root */
import
{ AppComponent }       from './app.component';
import { HighlightDirective } from './highlight.directive';
import { TitleComponent }     from './app.title.component';
import { UserService }        from './user.service';

import { ContactModule }  from './contact/contact.module';
import {FormsModule} from "@angular/forms";
import {HeroDetailComponent} from "./hero-detail.component";
/* Routing Module */


@NgModule({
  imports:      [ BrowserModule, FormsModule,ContactModule ],
  declarations: [ AppComponent, HighlightDirective, TitleComponent,HeroDetailComponent ],
  providers:    [ UserService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }