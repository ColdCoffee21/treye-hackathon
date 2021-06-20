import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Venue } from '../venues/venue.model';
import { VenuesService } from '../venues/venues.service';

@Component({
  selector: 'app-venue',
  templateUrl: './venue.page.html',
  styleUrls: ['./venue.page.scss'],
})
export class VenuePage implements OnInit {

  venue: Venue;
  constructor(private venueService: VenuesService, private route: ActivatedRoute, private navCtrl: NavController) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap =>{
      console.log(paramMap.keys);
      if (!paramMap.has('venId')){
        this.navCtrl.navigateBack('/tabs/venues');
        return;
      }
      this.venue = this.venueService.getVenue(paramMap.get('venId'));
    });
  }

}
