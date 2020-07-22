import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';

@Component({
  selector: 'app-geolocal-distance',
  templateUrl: './geolocal-distance.component.html',
  styleUrls: ['./geolocal-distance.component.scss'],
})
export class GeolocalDistanceComponent implements OnInit {

  @Output() obtenerDatos = new EventEmitter<any>();

  lat1:number
  lon1:number
  lat2:number
  lon2:number
  bandera: boolean = true

  constructor(private geolocation: Geolocation) { }

  ngOnInit() {}

  getGeolocation() {
    this.geolocation.getCurrentPosition().then((geoposition: Geoposition) => {
      if (this.bandera) {
        this.bandera = false;
        this.lat1 = geoposition.coords.latitude;
        this.lon1 = geoposition.coords.longitude;
      } else {
        this.bandera = true;
        this.lat2 = geoposition.coords.latitude;
        this.lon2 = geoposition.coords.longitude;
        const datos = {
          lat1: this.lat1,
          lon1: this.lon1,
          lat2: this.lat2,
          lon2: this.lon2
        };
        this.obtenerDatos.emit(datos);
      }
    })
  }

}