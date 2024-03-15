import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { CookiesService } from '../cookies.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-favorite-movies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './favorite-movies.component.html',
  styleUrl: './favorite-movies.component.css'
})
export class FavoriteMoviesComponent implements OnInit{
  films: any[] = [];

  constructor(private route: ActivatedRoute, private fetchService: FetchService, private router: Router, private cookiesService: CookiesService) {}

  ngOnInit() {
    const favorites = this.cookiesService.initializeFavorites();
    const apiRequests = favorites.map((favorite) => this.fetchService.getFilmDetails(favorite));

    forkJoin(apiRequests).subscribe({
      next: (responses) => {
        this.films = responses;
      },
      error: (error) => {
        console.error('Error fetching films: ', error);
      },
      complete: () => {
        console.log('Film fetch complete');
      }
    });
  }
  goToFilmDetails(id: Number) {
    this.router.navigate(['movie', id]).then(() => {
      window.location.reload();
  });
}
}
