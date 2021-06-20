import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
  import {AgmCoreModule} from '@agm/core';
 import {environment} from 'src/environments/environment.prod';
//  import {Geolocation} from '@ionic-native/geolocation/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
      AgmCoreModule.forRoot({
        apiKey: environment.firebase.apiKey,
        libraries: ['places'],
      }),
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    //  Geolocation
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
