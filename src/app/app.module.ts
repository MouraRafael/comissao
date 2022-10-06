import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculaComissaoComponent } from './calculaComissao/components/calcula-comissao/calcula-comissao.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculaComissaoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
