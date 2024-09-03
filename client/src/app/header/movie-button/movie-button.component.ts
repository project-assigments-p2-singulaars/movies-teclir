import { Component, Input, numberAttribute } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-button',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './movie-button.component.html',
  styleUrl: './movie-button.component.scss'
})
export class MovieButtonComponent {
  @Input() path: string = '';
  @Input({ transform: numberAttribute }) id: number = 0;
}
