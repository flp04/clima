import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClimaComponent } from './components/clima/clima.component';
import { CidadesComponent } from './cidades/cidades.component';
import { FormsModule } from '@angular/forms';
import { ListaCidadesComponent } from './components/lista-cidades/lista-cidades.component';
import { DataComponent } from './components/data/data.component';

@NgModule({
  declarations: [
    AppComponent,
    ClimaComponent,
    CidadesComponent,
    ListaCidadesComponent,
    DataComponent
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
