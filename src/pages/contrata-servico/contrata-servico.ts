import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

// Reference
// https://www.joshmorony.com/ionic-2-how-to-use-google-maps-geolocation-video-tutorial/

declare var google;

@IonicPage()
@Component({
  selector: 'page-contrata-servico',
  templateUrl: 'contrata-servico.html',
})
export class ContrataServicoPage {

	@ViewChild('map') mapElement: ElementRef;
	map: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
  }

  loadMap(){
      this.geolocation.getCurrentPosition().then((position) => {
        let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let mapOptions = {
          center: latLng,
          zoom: 15,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        }
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      }, (err) => {
        console.log(err);
      });
    }

    addInfoWindow(marker, content){
     
      let infoWindow = new google.maps.InfoWindow({
        content: content
      });
     
      google.maps.event.addListener(marker, 'click', () => {
        infoWindow.open(this.map, marker);
      });
     
    }

    addMarker(){
     
      let marker = new google.maps.Marker({
        map: this.map,
        animation: google.maps.Animation.DROP,
        position: this.map.getCenter()
      });
     
      let content = "<h4>Information!</h4>";         
     
      this.addInfoWindow(marker, content);
     
    }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ContrataServicoPage');
    this.loadMap();
  }

}
