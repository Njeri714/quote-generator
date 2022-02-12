;
import { QuoteDisplayComponent } from './quote-display/quote-display.component';
import { FormComponent } from './form/form.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component'import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CustomerUppercaseDirective } from './customer-uppercase.directives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { formsComponent } from 

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent.
    QuoteDisplayComponent,
    CustomerUppercaseDirective,
    FooterComponent,
    HeadComponent,
    FormComponent,
    QuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
