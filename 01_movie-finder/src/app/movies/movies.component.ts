import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movieService';
import { Movies } from '../models/movies';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  popular: Movies;
  theaters: Movies;
  kids: Movies;
  dramas: Movies;
  searchedMovies: Movie[]

  constructor(private movieService: MovieService) { }

  search(data) {
    console.log(data);
    this.movieService.searchByName(data.search)
      .subscribe((movies) => {
        this.searchedMovies = movies.results.length === 0 ? null : movies.results;
      })
  }

  ngOnInit() {
    this.movieService.getPopular()
      .subscribe(data => {
        this.popular = data;
      });

    this.movieService.getTheatres()
      .subscribe(data => {
        this.theaters = data;
      });

    this.movieService.getKids()
      .subscribe(data => {
        this.kids = data;
      });

      this.movieService.getDramas()
        .subscribe(data => {
          this.dramas = data;
        });
  }

}
