import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistSongsService {
  private apiUrl = 'http://localhost:8080'; 

  constructor(private http: HttpClient) { }

  getSongsByArtist(artistName: string): Observable<any[]> {
    const url = `${this.apiUrl}/${artistName}`;
    return this.http.get<any[]>(url);
  }
}
