import { Component, OnInit } from '@angular/core';
import { Experience } from './event.model';
import { EventsService } from './events.service';

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
  }

  toExperience(){}

}
