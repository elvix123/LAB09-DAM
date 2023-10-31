import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styleUrls: ['./lista-imagenes.component.css']
})
export class ListaImagenesComponent {
  imagenes = [
    {
      titulo: 'Imagen 1',
      descripcion: 'Descripción de la imagen 1',
      url: 'https://i.pinimg.com/236x/29/b0/b3/29b0b35affbde4e102f1220f9c29c9b7.jpg'
    },
    {
      titulo: 'Imagen 2',
      descripcion: 'Descripción de la imagen 2',
      url: 'https://i.pinimg.com/236x/d9/06/a4/d906a4c441b8226532f993f2f0a626bc.jpg'
    },
    {
      titulo: 'Imagen 3',
      descripcion: 'Descripción de la imagen 3',
      url: 'https://i.pinimg.com/236x/2b/89/bd/2b89bd8df4d298bcde17dd372afa3846.jpg'
    }
    // Agrega más objetos de imagen según sea necesario
  ];
}
