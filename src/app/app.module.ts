import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MovingComponent } from './moving/moving/moving.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { QuoteInfoComponent } from './quote-info/quote-info.component';
import { QuoteComponent } from './quote/quote.component';

@NgModule({
  declarations: [
    AppComponent,
    MovingComponent,
    QuoteFormComponent,
    QuoteInfoComponent,
    QuoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
