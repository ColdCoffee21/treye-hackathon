import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import {HardcodedDAO} from 'src/hardcoded-dao';
import {db} from 'src/hardcoded-db';



@Component({
  selector: 'app-event-details',
  templateUrl: './event-details.page.html',
  styleUrls: ['./event-details.page.scss'],
})
export class EventDetailsPage implements OnInit {
  experience: any;
  venues: any;

  // private readonly _navCtrl: NavController;

  constructor(
    private navCtrl: NavController,

  ) { }

  ngOnInit() {
    this.main();
  }


  goBack(){
    this.navCtrl.back();

  }


  goToTour(){
    this.navCtrl.navigateForward('/tour');

  }

  async main() {
    const dbDAO = new HardcodedDAO(db);
    this.experience = await dbDAO.fetchExperiences();
    console.log(this.experience[0])
    console.log(this.experience[0][1])

    this.venues = await dbDAO.fetchVenues();
    console.log(this.venues[0])





  }


}
