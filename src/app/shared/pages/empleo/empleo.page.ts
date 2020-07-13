import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { EmpleosService } from './../../services/empleos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleo',
  templateUrl: './empleo.page.html',
  styleUrls: ['./empleo.page.scss'],
})
export class EmpleoPage implements OnInit {

  empleo: Observable<any>

  constructor(private empleosService: EmpleosService, private route: ActivatedRoute, public router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id")
    this.empleo = this.empleosService.getEmpleo(id)
  }

  editarEmpleo(id: any) {
    this.router.navigate([`editar-empleo/${id}`])
  }

}
