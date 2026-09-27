import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  imports: [CommonModule],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
  standalone: true
})
export class Footer {

  currentYear: number = new Date().getFullYear();
  
  socialLinks = [
     {name: 'Instagram', url:'',icon: 'instagram'},
     {name: 'Facebook', url:'',icon: 'facebook'},
  
  ];

  navLinks = [
    {label: 'Sobre mi', fragment:''},
    {label: 'Pryectos', fragment:''},
    {label: 'Contacto', fragment:''}
  ];
}
