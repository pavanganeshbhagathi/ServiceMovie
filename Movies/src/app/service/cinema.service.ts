import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CinemaService {
  url = 'http://jsonplaceholder.typicode.com/photos';
  private data: any = [];

  constructor(private http: HttpClient) { }

  /*getMovies(): Observable<MovieModel[]>{
    return this.http.get<MovieModel[]>(this._url)
                    .pipe(tap(data => alert(JSON.stringify(data))) , catchError(this.errorHandler))
  }

  retrieveTodo(id){
    return this.http.get<Todo>(`http://jsonplaceholder.typicode.com/photos?id=${id}`).pipe(tap(data =>
    alert(JSON.stringify(data))) , catchError(this.errorHandler));
  }

  errorHandler(error: HttpErrorResponse){
    return observableThrowError(error.message || "Server Error");
  }
*/

getMovie(): Observable<any>{
  this.http.get(this.url).subscribe((res) => {
  this.data = res;
  });
  return this.data;
}
}
