import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer'; // <-- Asegúrate de que esta ruta sea correcta según tu estructura
import { Hero } from './components/hero/hero';
import { Projects } from './components/projects/projects';
import { About } from './components/about/about';
import { Contact } from './components/contact/contact';

@Component({
  imports: [RouterOutlet, Hero,Projects,About,Contact ,Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('Rodolfo Mondragon');
}