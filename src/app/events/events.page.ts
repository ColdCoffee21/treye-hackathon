import { Component, OnInit } from '@angular/core';
import { Experience } from './event.model';
import { EventsService } from './events.service';
import {HardcodedDAO} from 'src/hardcoded-dao';
import {db} from 'src/hardcoded-db';


@Component({
  selector: 'app-events',
  templateUrl: './events.page.html',
  styleUrls: ['./events.page.scss'],
})
export class EventsPage implements OnInit {
  loadedEvents: Experience[];
  constructor(private eventsService: EventsService) { }

  ngOnInit() {
    this.loadedEvents = this.eventsService.events;
    this.main();

  }

  toExperience(){}




  async main() {
    const dbDAO = new HardcodedDAO(db);
    console.log(await dbDAO.fetchUsers({firstName: 'Luise'}));
  }



}
