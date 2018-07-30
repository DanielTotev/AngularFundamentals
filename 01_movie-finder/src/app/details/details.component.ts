import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from 'node_modules/@angular/router';
import { MovieService } from '../services/movieService';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  movie: Movie;

  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      
      this.movieService.getById(id)
        .subscribe(data => {
          this.movie = data;
          // console.log(this.movie.genres)
        })
    })
  }

}
