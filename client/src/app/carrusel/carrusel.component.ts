import { Component, Input, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from '../Interfaces/movie';
import { MovieServiceService } from '../Services/movie-service.service';
import { CarruselItemComponent } from "./carrusel-item/carrusel-item.component";
import { AsyncPipe } from '@angular/common';

@Component({
    selector: 'app-carrusel',
    standalone: true,
    templateUrl: './carrusel.component.html',
    styleUrl: './carrusel.component.css',
    imports: [CarruselItemComponent, AsyncPipe]
})
export class CarruselComponent implements OnInit{

    movieList!: Observable<Movie[]>
    @Input() title: string = 'Movies';
  
    movieService = inject( MovieServiceService );
  
    ngOnInit(): void {
      this.movieList = this.movieService.getAllMovies();
    }
  }

