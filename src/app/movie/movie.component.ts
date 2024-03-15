import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FetchService } from '../fetch.service';
import { ActivatedRoute } from '@angular/router';
import { CookiesService } from '../cookies.service';

@Component({
  selector: 'app-movie',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './movie.component.html',
  styleUrl: './movie.component.css'
})
export class MovieComponent {
  details: any;
  id: number = 0;
  credits: String[] = [];
  isFavorite: boolean = false;

  constructor(private route: ActivatedRoute, private fetchService: FetchService, private cookiesService: CookiesService) {}

  ngOnInit() {
    this.route.params.subscribe(params=>{
      this.id = +params['id'];
    });
    this.fetchService.getFilmDetails(this.id).subscribe({
      next: (response) => {
        this.details = response;
      },
      error: (error) => {
        console.error('Error fetching film details: ', error);
      },
      complete: () => {
        console.log('Film details fetch complete');
      }
    });
    this.fetchService.getFilmCredits(this.id).subscribe({
      next: (response: { cast: { known_for_department: string; name: string }[] }) => {
        const actorsList = response.cast.filter((actor: { known_for_department: string }) => actor.known_for_department === "Acting").slice(0, 3);
        const actorNames: string[] = actorsList.map((actor: { name: string }) => actor.name);
        this.credits = actorNames;
      },
      error: (error) => {
        console.error('Error fetching film details: ', error);
      },
      complete: () => {
        console.log('Film details fetch complete');
      }
    });
    const favicon = document.getElementById('favoritesIcon');
    const favorites = this.cookiesService.initializeFavorites();
    if (favorites.includes(this.id)) {
      favicon?.classList.add('favorited');
    }
  }

  toggleFavorite(): void {
    const favoritesIcon = document.getElementById('favoritesIcon');

    this.isFavorite = !this.isFavorite;

    if (this.isFavorite) {
      favoritesIcon?.classList.add('favorited');
      this.addToFavorite(this.id);
    } else {
      favoritesIcon?.classList.remove('favorited');
      this.removeFromFavorite(this.id);
    }
  }

  addToFavorite(id: number): void {
    const favorites = this.cookiesService.initializeFavorites();
    if (!favorites.includes(id)) {
      favorites.push(id);
      this.cookiesService.updateFavorites(favorites);
      console.log("Item added to favorites:", id);
    } else {
      console.log("Item is already in favorites:", id);
    }
  }

  removeFromFavorite(id: number): void {
    console.log("remove from favorite");
    const favorites = this.cookiesService.initializeFavorites();
    if (favorites.includes(id)) {
      const index = favorites.indexOf(id);
      favorites.splice(index, 1);
      this.cookiesService.updateFavorites(favorites);
      console.log("Item removed from favorites:", id);
    } else {
      console.log("Item is not in favorites:", id);
    }
    console.log("Current favorites:", this.cookiesService.initializeFavorites());

  }
}
