import { Component } from '@angular/core';
import { Contacto } from './contacto';



@Component({
  selector: 'app-contactenos',
  templateUrl: './contactenos.component.html',
  styleUrls: ['./contactenos.component.css']
})
export class ContactenosComponent {

 


  contactenos: Contacto[] = [
    {id:'1',nombre:'Luis',direccion:'hector marisca 318',
    correo:'luisfourier10@gmail.com',telefono:'940775686'},
    {id:'2',nombre:'Albert',direccion:'juarez 333',
    correo:'albert20@gmail.com',telefono:'123456789'}
  ];



  id: string = '';
  nombre: string = '';
  direccion: string = '';
  correo: string = '';
  telefono: string = '';

  agregarContacto() {
    const nuevoContacto: Contacto = {
      id: this.id,
      nombre: this.nombre,
      direccion: this.direccion,
      correo: this.correo,
      telefono: this.telefono
    };

    this.contactenos.push(nuevoContacto);

    // Restablece los campos del formulario
    this.id ='';
    this.nombre = '';
    this.direccion = '';
    this.correo = '';
    this.telefono = '';
  }
}

