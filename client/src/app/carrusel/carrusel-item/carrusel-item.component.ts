import { Component, Input } from '@angular/core';
import { Movie } from '../../Interfaces/movie';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carrusel-item',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './carrusel-item.component.html',
  styleUrl: './carrusel-item.component.css'
})
export class CarruselItemComponent {
  @Input () movie!: Movie | null;

}
