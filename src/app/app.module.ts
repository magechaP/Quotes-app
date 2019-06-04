import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovingComponent } from './moving/moving.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { QuoteComponent } from './quote/quote.component';
import { DateCountPipe } from './date-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MovingComponent,
    QuoteFormComponent,
    QuoteInfoComponent,
    QuoteComponent,
    DateCountPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
