import { Component,OnInit } from '@angular/core';
import { Song,SongService } from '../song.service'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-songs-view',
  templateUrl: './songs-view.component.html',
  styleUrls: ['./songs-view.component.scss']
})
export class SongsViewComponent implements OnInit {
  songs: Song[] =[]; 

  constructor(private songService: SongService,private router:Router) {};
  navigateToAddSong(): void {
    this.router.navigate(['/add-song']);
  }
  ngOnInit(): void {
    this.songService.getSongs().subscribe(
      (response: any) => {
        
        if (response && response.data && Array.isArray(response.data)) {
          this.songs = response.data.map((song: any) => {
            return {
              _id : song._id,
              title: song.title,
              artist: song.artist,
              album: song.album,
              genre: song.genre,
              year: song.year,
              
            };
          });
        } else {
          console.error('Invalid API response:', response);
        }
      },
      (error) => {
        console.error('Error loading songs:', error);
      }
    );
  }
}

  


