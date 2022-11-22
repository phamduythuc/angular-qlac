import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { fakeBackendProvider } from './core/services/fake-backend';
import { AccountService } from './core/services/account.service';
import { HttpClientModule } from '@angular/common/http';
import { TableModule } from './table/table.module';
import { LoadingModule } from './loading/loading.module';
import { AddFormModule } from './add-form/add-form.module';
import { PanigationModule } from './panigation/panigation.module';
import { ViewAccountModule } from './view-account/view-account.module';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TableModule,
    LoadingModule,
    AddFormModule,
    PanigationModule,
    ViewAccountModule,
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  providers: [
    // provider used to create fake backend,
    AccountService,
    fakeBackendProvider,
  ],
})
export class AppModule {}
