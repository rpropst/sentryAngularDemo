import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import * as Sentry from '@sentry/angular';

Sentry.init({
  dsn: 'https://307f280cdb2b4561bdd989d029b573a7@o439594.ingest.sentry.io/5408425'
});

import { AppComponent } from './app.component';

enableProdMode();


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true
      })
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
