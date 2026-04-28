import { Component } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  movie: Movie = new Movie()

  constructor(private service: MovieService, private router: Router) { }

  save(): void {
    this.service.movies.push(this.movie)
    this.movie = new Movie()
    this.router.navigateByUrl("/list")
  }
}
