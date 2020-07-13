import { Empleo } from './../model/empleo';
import { Injectable } from '@angular/core';

import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class EmpleosService {

  constructor(private afs: AngularFirestore) { }

  getEmpleos(): Observable<any[]>{
    return this.afs.collection('empleos', ref => ref.orderBy('fecha', 'asc')).valueChanges();
  }

  getEmpleosPorNombre(): Observable<any[]>{
    return this.afs.collection("empleos",
      ref => ref.where("titulo", "==", "ICC").orderBy('fecha', 'asc')).valueChanges();
  }

  getEmpleo(uid: string): Observable<any>{
    let itemDoc = this.afs.doc<any>(`empleos/${uid}`);
    return itemDoc.valueChanges();
  }

  insertEmpleo(empleo: Empleo) {
    const refEmpleo = this.afs.collection('empleos')
    empleo.uid = this.afs.createId()
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true})
  }

  mergeEmpleo(empleo: Empleo) {
    console.log('mergeEmpleo')
    console.log(empleo)
    const refEmpleo = this.afs.collection('empleos')
    const param = JSON.parse(JSON.stringify(empleo));
    refEmpleo.doc(empleo.uid).set(param, {merge: true})
  }


}