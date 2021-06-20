import { Injectable } from '@angular/core';
import { Venue } from './venue.model';

@Injectable({
  providedIn: 'root'
})
export class VenuesService {
  private _venues: Venue[] = [
    new Venue('v1','Augustiner Museum', 'https://divisare-res.cloudinary.com/images/c_limit,f_auto,h_2000,q_auto,w_3000/v1462960233/vb31bx6dl57arbqv26bq/christoph-mackler-christian-richters-augustiner-museum.jpg', 'Augustinerpl.', '79098', 'Freiburg', 'Germany'),
    new Venue('v2','Graphische Sammlung', 'https://ais.bz-ticket.de/piece/0b/88/0b/de/193465310-h-653.jpg', 'Salzstraße 34',  '79098', 'Freiburg', 'Germany'),
    new Venue('v3','Zinnfigurenklause','https://lh3.googleusercontent.com/proxy/ImoKW-qygDXZWod8zC01bM30oAzCNEIhGJRhrhEtCgrDRKqrp4KvR4yCVGwS3o6k70oPejirICvSEd-tUjDgkYvtAcEutSQQA5yZMZMD4I5pmTv5YB20als', 'Schwabentor', '79098', 'Freiburg im Breisgau', 'Germany'),
    new Venue('v4','PEAC Museum','https://www.lust-auf-gut.de/media/roc_peac_museum_aussenansicht.jpg', 'Robert-Bunsen-Straße 5', '79108', 'Freiburg im Breisgau', 'Germany'),
  ];
  constructor() { }

  get venues(){
    // eslint-disable-next-line no-underscore-dangle
    return [...this._venues];
  }

  getVenue(id: string){
    return {...this._venues.find(v => v.id === id)};
  }
}
