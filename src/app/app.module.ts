import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MachineListComponent } from './machine-list/machine-list.component';
import { StatusPipe } from './status.pipe';

@NgModule({
  declarations: [
    AppComponent,
    MachineListComponent,
    StatusPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
