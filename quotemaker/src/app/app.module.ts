;
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
    HeadComponent
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
