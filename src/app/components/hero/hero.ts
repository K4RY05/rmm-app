import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-hero',
  styleUrl: './hero.css',
  templateUrl: './hero.html',
  standalone:true,
})
export class Hero {

  fullName = signal('Rodolfo Mondragón M.');
  title = signal('Licenciado en Comunicación ');
  description = signal('Profesional con más de 30 años de experiencia en el ámbito de comunicación social y periodismo.');
  
   photoUrl = 'start-image.png';

  scrollToContact(): void {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
