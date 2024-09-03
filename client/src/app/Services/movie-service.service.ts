import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Movie } from '../Interfaces/movie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieServiceService {

  private http = inject( HttpClient ) 
  
  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:3000/movies');
  }

  getMovieById( id: number ): Observable<Movie>{
    return this.http.get<Movie>(`http://localhost:3000/movies/${id}`);
    
  }

  getHeaderMovie(hero:boolean = false): Observable<Movie[]>{
    return this.http.get<Movie[]>('http://localhost:3000/movies?hero=true');
  }
}