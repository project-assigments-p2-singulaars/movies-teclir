import { Component, inject, Input, OnInit} from '@angular/core';
import { MovieServiceService } from '../../../Services/movie-service.service';
import { Movie } from '../../../Interfaces/movie';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-movie-detail-page',
  standalone: true,
  imports: [],
  templateUrl: './movie-detail-page.component.html',
  styleUrl: './movie-detail-page.component.css'
})
export class MovieDetailPageComponent {

  @Input('id') id!: string; 
  movieServiceService = inject (MovieServiceService)

movieDetail!: Movie; 
location=inject(Location)

  ngOnInit() {
    this.movieServiceService.getMovieById(parseInt(this.id)).subscribe((movie) => {
      this.movieDetail = movie;
    });

  }
backHome(){
  this.location.back()
}
}
