import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PageSelectorComponent } from '../page-selector/page-selector.component';
import { Genres } from '../genres/genres.component';
import { FilmsComponent } from '../films/films.component';
import { MenuComponent } from '../menu/menu.component';

@Component({
  selector: 'landing-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FilmsComponent, Genres, PageSelectorComponent, MenuComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
