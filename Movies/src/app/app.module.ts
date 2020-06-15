import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { CinemaService } from './service/cinema.service';

@NgModule({
  declarations: [
    AppComponent,
    MoviesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CinemaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
