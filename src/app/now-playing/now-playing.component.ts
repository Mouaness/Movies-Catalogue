import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-now-playing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './now-playing.component.html',
  styleUrl: './now-playing.component.css'
})
export class NowPlayingComponent implements OnInit{
  films: any[] = [];

  constructor(private route: ActivatedRoute, private fetchService: FetchService, private router: Router) {}

  ngOnInit() {
    this.fetchService.getPlaying().subscribe({
      next: (response) => {
        this.films = response.results;
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
