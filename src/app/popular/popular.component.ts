import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popular',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './popular.component.html',
  styleUrl: './popular.component.css'
})
export class PopularComponent implements OnInit{
  films: any[] = [];

  constructor(private route: ActivatedRoute, private apiService: FetchService, private router: Router) {}

  ngOnInit() {
    this.apiService.getPopular().subscribe({
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
