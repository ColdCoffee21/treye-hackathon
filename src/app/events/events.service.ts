import { Injectable } from '@angular/core';
import { Experience } from './event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {
  private _events: Experience[] = [
    // eslint-disable-next-line max-len
    new Experience('e1','Art','Testing desc', 'https://visit.freiburg.de/extension/portal-freiburg/var/storage/images/media/bibliothek/alle-anderen-bilder-1200x800px/01-fuehlen/kunst-kultur/museen/augustinermuseum-c-thomas-eiken/37203-1-ger-DE/augustinermuseum-c-thomas-eiken_front_large.png'),
    // eslint-disable-next-line max-len
    new Experience('e2','Mueseum','Ah the fun times.', 'https://www.freiburg.de/pb/site/freiburg_museen/get/params_E1843233077/265394/237522/497282/1370340/1413315/1424503/1439417/1437355/1450965/1450966/MNK_FRBG_SCHERER_09_10_38.jpg'),
    new Experience('e3','Frie','This place has a high historical significance..', 'https://upload.travelawaits.com/ta/uploads/2021/04/9188a9fa6be25debae6f5c36e22729188a9.jpg'),
    new Experience('e4','Burg','Logic, NF, Performing soon', 'https://pyxis.nymag.com/v1/imgs/280/a09/831956806c59629838ae46bd3e08255aaa-12-concerts.rsquare.w1200.jpg'),
  ];

  get events(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this._events];
  }
  constructor() { }
}
