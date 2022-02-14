import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { GuiGridModule } from '@generic-ui/ngx-grid';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { RechercheNavireComponent } from './component/planStockage/recherche-navire/recherche-navire.component';

@NgModule({
  declarations: [
    AppComponent,
    RechercheNavireComponent
  ],
  imports: [
    BrowserModule,
    GuiGridModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
