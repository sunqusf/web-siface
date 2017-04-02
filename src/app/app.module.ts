import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpModule } from '@angular/http';
import { HttpService } from './services/http.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

// import { PagingComponent } from './utils/paging.component';

import { CotizaModule } from './cotiza/cotiza.module';

import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent//,
    // PagingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TextMaskModule,
    HttpModule,
    NgbModule.forRoot(),
    CotizaModule,
    AppRoutingModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
