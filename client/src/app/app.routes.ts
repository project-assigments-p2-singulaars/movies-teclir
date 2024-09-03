import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieDetailPageComponent } from './movie/pages/movie-detail-page/movie-detail-page.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
        { path: 'home', redirectTo: '' },
        { path: 'movie-detail/:id', component:MovieDetailPageComponent}
]




