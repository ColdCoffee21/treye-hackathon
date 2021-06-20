import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from './venue.model';
import { VenuesService } from './venues.service';


import { HardcodedDAO } from 'src/hardcoded-dao';
import { db } from 'src/hardcoded-db';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage implements OnInit {

  loadedVenues: Venue[];
  // constructor(private venueService: VenuesService, private router: Router) { }

  ngOnInit() {
    this.main();
    // this.loadedVenues = this.venueService.venues;
  }
  // openVenue(venId: string){
  //   this.router.navigate(['/', 'tabs', 'venues', venId]);
  // }

  venues: any;


  private readonly _navCtrl: NavController;


  constructor(
    navCtrl: NavController,

  ) {
    this._navCtrl = navCtrl;



  }


  async main() {
    const dbDAO = new HardcodedDAO(db);
    this.venues = await dbDAO.fetchVenues();

     console.log(this.venues)
    // console.log(this.experiences[0])
    // console.log(this.experiences[0].title)


  }

}
