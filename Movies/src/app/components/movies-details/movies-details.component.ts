import { Component, OnInit } from '@angular/core';
import { CinemaService } from './../../service/cinema.service';


@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent implements OnInit {

  title = 'Hall Of Fame';
  movie: any = {};
  constructor(private cinemaService: CinemaService) { }

  ngOnInit(): void {
  }

  getMovie(){
    this.movie = this.cinemaService.getMovie();
    console.log(this.movie);
  }
}
