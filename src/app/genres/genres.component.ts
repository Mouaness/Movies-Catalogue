import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-genres',
  standalone: true,
  imports: [CommonModule, ],
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class Genres implements OnInit {
  genres: any[] = [];

  constructor(private fetchService: FetchService, private router: Router) {};

  ngOnInit() {
    this.fetchService.getGenres().subscribe({
      next: (response) => {
        this.genres = response.genres;
      },
      error: (error) => {
        console.error('Error fetching genres: ', error);
      },
      complete: () => {
        console.log('Genre fetch complete');
      }
    });
  }

  goToGenre(event: Event, id: number) {
    event.preventDefault();
    this.router.navigate(['LandingPage', id, 1]).then(() => {
      window.location.reload();
    });
  }
}
