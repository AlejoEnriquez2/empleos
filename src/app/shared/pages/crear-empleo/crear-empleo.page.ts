import { Component, OnInit } from '@angular/core';
import { Empleo } from '../../model/empleo';
import { EmpleosService } from '../../services/empleos.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

@Component({
  selector: 'app-crear-empleo',
  templateUrl: './crear-empleo.page.html',
  styleUrls: ['./crear-empleo.page.scss'],
})
export class CrearEmpleoPage implements OnInit {

  distance: number;
  empleo: Empleo = new Empleo

  base64Image: any;
  constructor(private EmpleosService: EmpleosService, private camera: Camera) { }

  ngOnInit() {
  }

  guardarEmpleo(){
    console.log(this.empleo)
    this.EmpleosService.insertEmpleo(this.empleo)
  }

  tomarFoto() {
    const options: CameraOptions = {
      quality: 100, 
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      console.log(this.base64Image);
    }, (err) => {
      console.error(err);
    });
  }

  imagenCargada(e) {
    console.log("imagen cargada");
    console.log(JSON.stringify(e));
    this.empleo.image = e;
  }

  calcularDistancia(data) {
    let p = 0.017453292;
    let c = Math.cos;
    let a = 0.5 - c((data.lat1 - data.lat2) * p) / 2 + c(data.lat1 * p) * (1 - c(((data.lon1 - data.lon2) * p))) / 2;
    let dis = (12742 * Math.asin(Math.sqrt(a)));
    this.distance = Math.trunc(dis);
  }
}
