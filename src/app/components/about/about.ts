import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  styleUrl: './about.css',
  templateUrl: './about.html'
})
export class About {
  sectionTitle = signal('Sobre Mí');
  bioDescription = signal('Periodista, comunicador y conductor de radio. En 1979 inicié como reportero de la Sección Financiera del periódico El Heraldo de México. Actualmente escribo la columna EL LAVADERO DE CHABELITA, que se publica los domingos en periódico Metro. También la columna Asuntos de Estado que se publica en las revistas Impar, Entresema y Tabloide Noticias. Soy conductor titular del programa Experiencia IPN, que se transmite martes y jueves en Radio IPN, 95.7 FM. Premio Nacional de Locución 2022.');
  
  skills = signal([
    'Reportajes',
    'Organización de conferencias de medios',
    'Elaboración de boletines para medios',
    'Relaciones públicas',
    'Manejo de grupos',
    'Buena comunicación oral y escrita',
    'Capacidad de análisis',
    'Logística de eventos',
    'Trabajo bajo presión'
  ]);

  associations = signal([
    { name: 'Asociación Nacional de Locutores de México, A.C.', role: 'Miembro activo' },
    { name: 'Club Primera Plana', role: 'Periodista asociado' },
    { name: 'Asociación Mexicana de Periodistas de Radio y Televisión', role: 'Socio numerario' }
  ]);
}