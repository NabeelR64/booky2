import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private httpClient: HttpClient) { }

  getVolume(volumeId: string): Observable<any> {
    const encodedString = encodeURIComponent(volumeId);
    const title = encodedString.replace(/%20/g, '%20');
    console.log(title);
    const url = `https://www.googleapis.com/books/v1/volumes?q=title:${title}&key=AIzaSyCz-eWeCBVGmZs8zpylRKIrVZRlsjPSxJE`;
    const headers = {
      Authorization: `AIzaSyCz-eWeCBVGmZs8zpylRKIrVZRlsjPSxJE`
    };

    return this.httpClient.get(url, { headers });
  }
}
//   searchBooks(query: string): Observable<any[]> {
//     return this.http.get<any[]>(`/api/books?query=${query}`);
//   }
// }
