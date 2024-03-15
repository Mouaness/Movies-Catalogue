import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchService {
  private apiKey = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNGNlNGZjYzJjYzQ1MTYyZmJlYzMxMjAzMThjNWFkMyIsInN1YiI6IjY1ODAwMWJhYWM2MTdjMDg3MjE0ZTc4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hP6Cfu0ANqczXsrOknbiyL_IK2JGt2Ed5raIBSpDqPY'
  constructor(private http: HttpClient) {}

  getGenres(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/genre/movie/list?language=en'
    return this.http.get(url, { headers });
  }

  getFilms(genre:number, pagenum:number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page='+pagenum+'&sort_by=popularity.desc&with_genres='+genre;
    return this.http.get(url, { headers });
  }

  getFilmDetails(id: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/movie/'+id+"?language=en-US";
    return this.http.get(url, { headers });
  }

  getFilmCredits(id: number): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/movie/'+id+'/credits?language-en-US';
    return this.http.get(url, { headers });
  }

  getPlaying(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
    return this.http.get(url, { headers });
  }

  getPopular(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
    return this.http.get(url, { headers });
  }

  getToprated(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
    return this.http.get(url, { headers });
  }

  getUpcoming(): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });

    const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
    return this.http.get(url, { headers });
  }

  search(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.apiKey}`
    });
    const url = 'https://api.themoviedb.org/3/search/movie?query='+query+'&include_adult=false&language=en-US&page=1';
    return this.http.get(url, { headers });
  }
}
