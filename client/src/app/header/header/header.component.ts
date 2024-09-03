import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Movie } from '../../Interfaces/movie';
import { MovieButtonComponent } from '../movie-button/movie-button.component';

  @Component({
    selector: 'app-header',
    standalone: true,
    imports: [RouterLink, MovieButtonComponent],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
  })
  export class HeaderComponent implements OnInit {
    @Input() movie!: Movie | null;
    pathToDetail = '/movie/detail/';
  
    ngOnInit(): void {
      console.log( this.pathToDetail );
    }
  }

