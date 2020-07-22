import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrearEmpleoPageRoutingModule } from './crear-empleo-routing.module';

import { CrearEmpleoPage } from './crear-empleo.page';
import { ImageUploadComponent } from 'src/app/components/image-upload/image-upload.component';
import { GeolocalDistanceComponent } from '../../../components/geolocal-distance/geolocal-distance.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrearEmpleoPageRoutingModule
  ],
  declarations: [CrearEmpleoPage, ImageUploadComponent, GeolocalDistanceComponent],
  exports: [ImageUploadComponent, GeolocalDistanceComponent]
})
export class CrearEmpleoPageModule {}
