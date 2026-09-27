import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './projects.css',
  templateUrl: './projects.html'
})
export class Projects {
  sectionTitle = signal('Proyectos y Trayectoria');
  sectionSubtitle = signal('Medios impresos, radiodifusión y columnas destacadas');

  projects = signal([
    {
      title: 'El Lavadero de Chabelita',
      category: 'Prensa Escrita',
      platform: 'Periódico Metro',
      description: 'Columna de opinión e información publicada dominicalmente, abordando temas de interés público con un estilo crítico y cercano a la ciudadanía.',
      badge: 'Dominical',
      image: 'ancla.png',
      link: ''
    },
    {
      title: 'Asuntos de Estado',
      category: 'Prensa y Revistas',
      platform: 'Impar, Entresema y Tabloide Noticias',
      description: 'Columna de análisis político y social enfocada en el acontecer nacional, difundida a través de diversos medios impresos y digitales.',
      badge: 'Análisis',
      image: 'asuntosdepoder.jpeg',
      link: 'https://tabloiderevista.com/asuntos_de_poder-e3TAwe3jQwe3zc.html'
    },
    {
      title: 'Experiencia IPN',
      category: 'Radio y Conducción',
      platform: 'Radio IPN (95.7 FM)',
      description: 'Conducción titular del programa institucional transmitido martes y jueves, promoviendo el diálogo, la cultura y la divulgación científica.',
      badge: '95.7 FM',
      image: 'radioipn.jpeg',
      link: 'https://www.ivoox.com/podcast-experiencia-ipn_sq_f11548929_1.html'
    }
  ]);
}