import { Injectable } from "@angular/core"
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Movies } from "../models/movies";
import { Movie } from "../models/movie";

const API_KEY: string = 'b109bdaa2129b38178d60b9e557c71bd';

@Injectable()
export class MovieService {
    path: string = 'https://api.themoviedb.org/3/';
    popular: string = 'discover/movie?sort_by=popularity.desc';
    authentication: string = '&api_key=';
    theatres: string = 'discover/movie?primary_release_date.gte=2014-09-15&primary_release_date.lte=2018-05-22';
    kids: string = 'discover/movie?certification_country=US&certification.lte=G&sort_by=popularity.desc';
    dramas: string = 'discover/movie?with_genres=18&primary_release_year=2018';
    movie: string = 'movie/';
    movieAuth: string = '?api_key=';

    constructor (private httpClient: HttpClient) { }

    getPopular(): Observable<Movies> {
        return this.httpClient.get<Movies>(`${this.path}${this.popular}${this.authentication}${API_KEY}`)
    }

    getTheatres(): Observable<Movies> {
        return this.httpClient.get<Movies>(`${this.path}${this.theatres}${this.authentication}${API_KEY}`);
    }

    getKids(): Observable<Movies> {
        return this.httpClient.get<Movies>(`${this.path}${this.kids}${this.authentication}${API_KEY}`);
    }

    
    getDramas(): Observable<Movies> {
        return this.httpClient.get<Movies>(`${this.path}${this.dramas}${this.authentication}${API_KEY}`);
    }

    getById(id): Observable<Movie> {
        return this.httpClient.get<Movie>(`${this.path}${this.movie}${id}${this.movieAuth}${API_KEY}`);
    }

    searchByName(name): Observable<Movies> {
        return this.httpClient.get<Movies>(`${this.path}search/movie?query=${name}${this.authentication}${API_KEY}`);
    }
}