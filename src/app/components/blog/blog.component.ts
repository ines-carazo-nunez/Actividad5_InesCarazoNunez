import { Component } from '@angular/core';
import { INoticia } from '../../interfaces/inoticia.interface';
import { FormsModule } from '@angular/forms';
import { NOTICIAS } from '../../db/noticias.db';

/* Actividad 5 - Inés Carazo Núñez */

@Component({
  selector: 'app-blog',
  imports: [FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css',
})
export class BlogComponent {
  noticia: INoticia = {
    titulo: '',
    imagen: '',
    texto_noticia: '',
    fecha_publicacion: ''
  }
  arrayNoticias: INoticia[] = []
  todayDate: Date = new Date()


  constructor() {
    this.arrayNoticias = NOTICIAS
  }

  /**
   * Función que guarda los datos del formulario en el array
   */
  guardardata(): void {
    //Comprobamos si todos los campos están rellenados
    if (this.compruebaCampos()) {
      //CAmbiamos el formato de la fecha introducida
      const [yyyy, mm, dd] = this.noticia.fecha_publicacion.split('-')
      this.noticia.fecha_publicacion = `${dd}-${mm}-${yyyy}`

      //Actualizamos el array de noticias
      this.arrayNoticias.push({ ...this.noticia })
      // Vaciamos el objeto noticias
      this.noticia = {
        titulo: '',
        imagen: '',
        texto_noticia: '',
        fecha_publicacion: ''
      }
    } else {
      // Si no están rellenos todos los campos del formulario mostramos este mensaje
      alert('Para añadir la noticia se deben rellenar todos los campos')
    }
  }

  /**
   * Función que comprueba si todos los campos están rellenos
   * @returns Boolean
   */
  compruebaCampos(): boolean {
    if (this.noticia.titulo.length > 0 && this.noticia.imagen.length > 0 && this.noticia.fecha_publicacion.length > 0 && this.noticia.texto_noticia.length > 0) {
      return true
    } else { return false }
  }
}
