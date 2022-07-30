import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  private map!: google.maps.Map;
  latitude!: number;
  longitude!: number;

  ngOnInit(): void {

    navigator.geolocation.getCurrentPosition((position)=>{
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    })


    let loader = new Loader({
      apiKey: 'AIzaSyCNjG6kQVPIfEVFAHE0maCoFmRKbc-Omro',
    });

    loader.load().then(() => {
      const location = { 
        lat: this.latitude,
        lng: this.longitude
       }

      this.map = new google.maps.Map(document.getElementById("map")!, {
        center: location,
        zoom: 6,
      })

      const marker = new google.maps.Marker({
        position: location,
        map: this.map,
      });
    })
  }
}
