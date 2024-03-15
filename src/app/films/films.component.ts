import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-films',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './films.component.html',
  styleUrl: './films.component.css'
})
export class FilmsComponent implements OnInit{
  films: any[] = [];
  genre: number = 0;
  pagenum: number = 1;

  constructor(private route: ActivatedRoute, @Inject(FetchService) private fetchService: FetchService, private router: Router) {}

  ngOnInit() {
    console.log("hello" + this.route);
    this.route.params.subscribe(params=>{
      this.genre = +params['genre'];
      this.pagenum = +params['page'];
    })

    this.fetchService.getFilms(this.genre,this.pagenum).subscribe({
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
