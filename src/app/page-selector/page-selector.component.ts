import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-selector',
  standalone: true,
  imports: [],
  templateUrl: './page-selector.component.html',
  styleUrl: './page-selector.component.css'
})
export class PageSelectorComponent {
  genre: number = 0;
  pagenum: number = 1;
  constructor(private route: ActivatedRoute, private router: Router) {}

  goToPrevious(event: Event){
    event.preventDefault();
    this.route.params.subscribe(params=>{
      this.genre = +params['genre'];
      this.pagenum = +params['page'];})
    this.pagenum = this.pagenum - 1;
    if (this.pagenum < 1){
      this.pagenum = 1;
    }
    this.router.navigate(['LandingPage', this.genre, this.pagenum]).then(() => {
      window.location.reload();
    });
  }

  goToNext(event: Event){
    event.preventDefault();
    this.route.params.subscribe(params => {
      this.genre = +params['genre'];
      this.pagenum = +params['page'];
      this.pagenum = this.pagenum + 1;
    });
    this.router.navigate(['LandingPage', this.genre, this.pagenum]).then(() => {
      window.location.reload();
    });
  }
}
