import { Component, OnInit } from '@angular/core';
import { HardcodedDAO } from 'src/hardcoded-dao';
import { db } from 'src/hardcoded-db';
import { ElementRef, EventEmitter, Input, Output, ViewChildren } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { MapsAPILoader } from '@agm/core';

declare let google;


@Component({
  selector: 'app-nearby',
  templateUrl: './nearby.page.html',
  styleUrls: ['./nearby.page.scss'],
})
export class NearbyPage implements OnInit {
  experiences: any;

  private readonly _platform: Platform;
  private readonly _mapsAPILoader: MapsAPILoader;
  private readonly _navCtrl: NavController;

  constructor(
    platform: Platform,
    mapsAPILoader: MapsAPILoader,
    navCtrl: NavController,

  ) {
    this._navCtrl = navCtrl;

    this._platform = platform;
    this._mapsAPILoader = mapsAPILoader;


    this.isLoading = true;


  }


  async ngOnChanges(): Promise<void> {
    if (this.locationToShow != undefined) {
      await this.loadMap();
    }
  }

  async ngOnInit(): Promise<void> {
    await this._mapsAPILoader.load();
    await this.loadMap();
    this.main();
  }



  async main() {
    const dbDAO = new HardcodedDAO(db);
    this.experiences = await dbDAO.fetchExperiences();
    // console.log(this.experiences)
    // console.log(this.experiences[0])
    // console.log(this.experiences[0].title)


  }


  @ViewChildren('map') mapElement: ElementRef;
  @Output() mapEvent = new EventEmitter();
  @Input() eventasyPins?;
  @Input() locationToShow?;

  map: any;
  address: string;

  latitude: number;
  longitude: number;
  isLoading = true;

  icons = {
    one: {
      name: 'first-pick',
      icon: 'assets/icons/one.png',
    },
    two: {
      name: 'second-pick',
      icon: 'assets/icons/two.png',
    },
    three: {
      name: 'third-pick',
      icon: 'assets/icons/three.png',
    },
  };





  async toEventDetailPage(): Promise<void> {
    await this._navCtrl.navigateForward('/event-details');

  }




  async loadMap(): Promise<void> {
    console.log(
      'here'
    )

    this.latitude = 47.995553;
    this.longitude = 7.850502;


      const latLng = new google.maps.LatLng(this.latitude, this.longitude);
      const mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        disableDefaultUI: true,
        zoomControl: true,
        gestureHandling: 'cooperative',


      };


      this.map = new google.maps.Map(this.mapElement['first'].nativeElement, mapOptions);

      // this.map.addListener('dragend', () => {
      //   this.latitude = this.map.center.latitude();
      //   this.longitude = this.map.center.longitude();
      //   this.mapEvent.emit([this.latitude, this.longitude])

      // })


      const currentPosition = new google.maps.LatLng(this.latitude, this.longitude);
      const currentLocationIcon = 'assets/icons/location-marker.png';


      new google.maps.Marker({
        position: currentPosition,
        icon: currentLocationIcon,
        map: this.map,
      });


      // add the features or eventasy pins
      try {
        this.eventasyPins.forEach((pinObj): void => {
          const position = new google.maps.LatLng(pinObj.position[0], pinObj.position[1]);
          const icon = this.icons[pinObj.type].icon;
          new google.maps.Marker({
            position: position,
            icon: icon,
            map: this.map,
          });
        });
      } catch { }




    this.isLoading = false;




  }



}
