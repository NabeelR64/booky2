import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) {}

  searchBooks(query: string): Observable<any[]> {
    return this.http.get<any[]>(`/api/books?query=${query}`);
  }
}