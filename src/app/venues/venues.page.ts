import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Venue } from './venue.model';
import { VenuesService } from './venues.service';

@Component({
  selector: 'app-venues',
  templateUrl: './venues.page.html',
  styleUrls: ['./venues.page.scss'],
})
export class VenuesPage implements OnInit {

  loadedVenues: Venue[];
  constructor(private venueService: VenuesService, private router: Router) { }

  ngOnInit() {
    this.loadedVenues = this.venueService.venues;
  }
  openVenue(venId: string){
    this.router.navigate(['/', 'tabs', 'venues', venId]);
  }

}
