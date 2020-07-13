import { Observable } from 'rxjs';
import { EmpleosService } from './../../services/empleos.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-empleos',
  templateUrl: './lista-empleos.page.html',
  styleUrls: ['./lista-empleos.page.scss'],
})
export class ListaEmpleosPage implements OnInit {

  empleados: Observable<any[]>

  cosas : any = new Array()

  constructor(private empleosService: EmpleosService, public router: Router) { }

  ngOnInit() {
    this.empleados = this.empleosService.getEmpleos()

    this.cosas.push({id: 10, nombre: "xya"})
    this.cosas.push({id: 20, nombre: "abc"})
    this.cosas.push({id: 30, nombre: "def"})
  }

  showEmpleo(id: any){
    this.router.navigate([`empleo/${id}`])
  }

}
