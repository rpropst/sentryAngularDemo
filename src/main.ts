import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import * as Sentry from '@sentry/angular';

import { AppModule } from './app/app.module';

Sentry.init({
  dsn: 'https://307f280cdb2b4561bdd989d029b573a7@o439594.ingest.sentry.io/5408425',
});

enableProdMode();
platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .then(success => console.log(`Bootstrap success`))
  .catch(err => console.error(err));
