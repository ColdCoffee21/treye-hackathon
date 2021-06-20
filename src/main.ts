import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));


// import {DbDAO} from './db-dao';

//   async function main() {
//     const dbDAO = new DbDAO({
//       host: 'dbx4ipf4.mariadb.routing.zone',
//       user: 'dbx4ipf4_pmrze9y',
//       password: 'Freiburg2021',
//       database: 'dbx4ipf4',
//       connectionLimit: 2,
//     });
//   }
//   main();
