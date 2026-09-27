import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from './components/footer/footer'; // <-- Asegúrate de que esta ruta sea correcta según tu estructura

@Component({
  imports: [RouterOutlet, Footer],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
  standalone: true,
})
export class App {
  protected readonly title = signal('Rodolfo Mondragon');
}