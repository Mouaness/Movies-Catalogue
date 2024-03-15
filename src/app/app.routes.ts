import { Routes } from '@angular/router';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { MovieComponent } from './movie/movie.component';
import { FavoriteMoviesComponent } from './favorite-movies/favorite-movies.component';
import { NowPlayingComponent } from './now-playing/now-playing.component';
import { PopularComponent } from './popular/popular.component';
import { TopRatedComponent } from './top-rated/top-rated.component';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { SearchComponent } from './search/search.component';

export const routes: Routes = [
    { path: '', redirectTo: '/LandingPage/28/1', pathMatch: 'full'},
    { path: 'LandingPage/:genre/:page', component: LandingPageComponent },
    { path: 'movie/:id', component: MovieComponent },
    { path: 'favorite-movies', component: FavoriteMoviesComponent },
    { path: 'now-playing', component: NowPlayingComponent },
    { path: 'popular', component: PopularComponent},
    { path: 'top-rated', component: TopRatedComponent},
    { path: 'upcoming', component: UpcomingComponent},
    { path: 'search/:query/:page', component: SearchComponent},
];
