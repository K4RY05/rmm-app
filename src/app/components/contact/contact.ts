import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './contact.css',
  templateUrl: './contact.html'
})
export class Contact {
  sectionTitle = signal('Contacto & Redes');
  sectionSubtitle = signal('Conectemos a través de los canales oficiales de comunicación');

  socialLinks = signal([
    {
      name: 'Facebook / Columna',
      handle: '@RodolfoMondragonM',
      description: 'Seguimiento de publicaciones, artículos y transmisiones en vivo.',
      url: 'https://facebook.com',
      icon: 'facebook'
    },
    {
      name: 'X (Twitter)',
      handle: '@R_MondragonM',
      description: 'Opinión y análisis político de actualidad al momento.',
      url: 'https://entresemana.mx/category/opinion/r-mondragon-m/',
      icon: 'twitter'
    },
    {
      name: 'Radio IPN 95.7 FM',
      handle: 'Experiencia IPN',
      description: 'Sintoniza el programa institucional martes y jueves.',
      url: 'https://www.noticiazavaleta.info/tag/rodolfo-mondragon-monroy/',
      icon: 'radio'
    },
    {
      name: 'Tabloide / Revistas',
      handle: 'Asuntos de Estado',
      description: 'Lectura de columnas y reportajes impresos y digitales.',
      url: 'https://tabloiderevista.com/asuntos_de_poder-e3TAwe3jQwe3zc.html',
      icon: 'article'
    }
  ]);
}