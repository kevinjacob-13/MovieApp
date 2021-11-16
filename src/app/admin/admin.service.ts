import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  movieSelected: number;
  formData: any;
  readonly rootURL = "https://localhost:44363/api"

  constructor(private http: HttpClient) { }

  postMovie(formData: any) {
    return this.http.post(this.rootURL + '/movies', formData);
  }

  putMovie(formData: any) {
    return this.http.put(this.rootURL + '/movies/' + this.movieSelected, formData);
  }

  deleteMovie(MovieId: number) : Observable<any>{
    return this.http.delete(this.rootURL + '/movies/' + MovieId);
  }

  getAllMovies(): Observable<any> {
    return this.http.get(this.rootURL + '/movies/');
  }

  getMovieByMovieId(): Observable<any> {
    return this.http.get(this.rootURL + '/movies/' + this.movieSelected);
  }
}
