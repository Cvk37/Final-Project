import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SongService,Song } from '../song.service';

@Component({
  selector: 'app-add-song',
  templateUrl: './add-song.component.html',
  styleUrls: ['./add-song.component.scss']
})
export class AddSongComponent {
  song:Song={
    _id:'',
    title:'',
    artist:'',
    album:'',
    genre:'',
    year:0
  }
  constructor(private songService:SongService, private router: Router) {}
  onSubmit(): void {
    this.songService.addSong(this.song).subscribe(
      (response: any) => {
        console.log('Song added successfully:', response);
       
        if (response && response.data && response.data._id) {
          // Navigate to the player's stats page with the new player's ID
          this.router.navigate(['/songs',response.data._id]);
        } else {
          console.error('Invalid response from the server:', response);
        }
      },
      error => {
        console.error('Error adding song:', error);
    
      }
    );
}
navigateToHomePage(): void {
  this.router.navigate(['/']);
}
}
