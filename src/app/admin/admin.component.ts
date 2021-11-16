import { Component, OnInit } from '@angular/core';
import { AdminService } from './admin.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  moviesList: any = [];
  constructor(private service: AdminService) { }

  ngOnInit(): void {
    this.getAllMovies();
  }

  getAllMovies() {
    this.service.getAllMovies().subscribe((response) => {
      //this.moviesList = []
      this.moviesList.push(response)
    });
    console.log(this.moviesList);
  }
  deleteMovie(MovieId: number) {
    console.log(MovieId);
    this.service.deleteMovie(MovieId).subscribe((response) => {
      this.moviesList = [],
        this.getAllMovies(),
          console.log(response)
    });
  }
  editMovieSelect(MovieId: number) {
     this.service.movieSelected = MovieId;
  }
}
