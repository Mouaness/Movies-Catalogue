import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  searchText: string = '';

  constructor(private router: Router) {}

  Favorites(event:Event){
    event.preventDefault();
    this.router.navigate(['favorite-movies']).then(() => {
      window.location.reload();
    });
  }

  NowPlaying(event:Event){
    event.preventDefault();
    this.router.navigate(['nowplaying']).then(() => {
      window.location.reload();
    });
  }
  Popular(event:Event){
    event.preventDefault();
    this.router.navigate(['popular']).then(() => {
      window.location.reload();
    });
  }
  TopRated(event:Event){
    event.preventDefault();
    this.router.navigate(['toprated']).then(() => {
      window.location.reload();
    });
  }

  Upcoming(event:Event){
    event.preventDefault();
    this.router.navigate(['upcoming']).then(() => {
      window.location.reload();
    });
  }

  Search(event:Event){
    event.preventDefault();
    this.router.navigate(['search', this.searchText,1]).then(() => {
      window.location.reload();
    });
  }

}
