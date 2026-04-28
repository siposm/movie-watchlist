import { Injectable } from '@angular/core';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  movies: Movie[] = []

  constructor() {
    this.seed()
  }

  create(): void {
    // TODO
  }

  delete(): void {
    // TODO
  }

  seed(): void {
    let m: Movie = new Movie()
    m.title = "Interstellar"
    m.year = 2014
    m.watched = false
    m.rating = 5
    m.imgUrl = "https://m.media-amazon.com/images/M/MV5BNzllYzMxMzgtODM1YS00OThjLWE0MmUtZjExMDYyYWFhZTgzXkEyXkFqcGc@._V1_.jpg"

    this.movies.push(m)

    m = new Movie()
    m.title = "Inception"
    m.year = 2010
    m.watched = false
    m.rating = 4
    m.imgUrl = "https://m.media-amazon.com/images/M/MV5BY2I5NWQxYmUtYTVkYy00YjUwLWEyM2YtNDczNzUxMTM3ZmI2XkEyXkFqcGc@._V1_.jpg"

    this.movies.push(m)

    m = new Movie()
    m.title = "The Matrix"
    m.year = 1999
    m.watched = true
    m.rating = 5
    m.imgUrl = "https://m.media-amazon.com/images/M/MV5BZDJkYzdkN2YtZDI1MS00MTE2LWE3OTgtYjcwNzEzYTYxYzhhXkEyXkFqcGc@._V1_.jpg"

    this.movies.push(m)
  }
}
