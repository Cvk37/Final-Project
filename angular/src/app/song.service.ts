import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
 // Import the Song model if you have one
 export interface Song {
  _id: string; // Optional if you have an ID field in your MongoDB collection
  title: string;
  artist: string;
  album: string;
  genre: string;
  year: number;
}
@Injectable({
  providedIn: 'root'
})
export class SongService {
  private apiUrl = 'http://localhost:8080/songs'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  // Get all songs from the API
  getSongs(): Observable<Song[]> {
    return this.http.get<Song[]>(this.apiUrl);
  }

  // Add a new song to the API
  addSong(song: Song): Observable<Song> {
    return this.http.post<Song>(this.apiUrl, song);
  }
  getSongDetailsById(songId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${songId}`);
  }

  // Update an existing song in the API
  updateSong(id: string, song: Song): Observable<Song> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Song>(url, song);
  }

  // Delete a song from the API
  deleteSong(id: string): Observable<void> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<void>(url);
  }
}
