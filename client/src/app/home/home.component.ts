import { Component, OnInit, inject } from '@angular/core';
import { MovieServiceService } from '../Services/movie-service.service';
import { HeaderComponent } from "../header/header/header.component";
import { Movie } from '../Interfaces/movie';
import { CarruselComponent } from "../carrusel/carrusel.component";

@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    imports: [HeaderComponent, CarruselComponent]
})
export class HomeComponent implements OnInit{


    movieHeader!: Movie;
    movieService = inject(MovieServiceService);

    ngOnInit(): void {
        this.movieService.getHeaderMovie().subscribe(observable => {
            console.log(observable, 'hero movie');
            this.movieHeader = observable[0];
        });
    }

}