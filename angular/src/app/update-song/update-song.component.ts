import { Component,OnInit } from '@angular/core';
import { Song,SongService } from '../song.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-update-song',
  templateUrl: './update-song.component.html',
  styleUrls: ['./update-song.component.scss']
})
export class UpdateSongComponent {
  songId:string=''
  song:Song={
    _id:'',
    title:'',
    artist:'',
    album:'',
    genre:'',
    year:0
  }
  constructor( private route: ActivatedRoute, private songService:SongService, private router: Router) {}
  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.songId = params['id'];
      // Fetch player details using playerId and populate the form
      this.songService.getSongDetailsById(this.songId).subscribe(
        (response: any) => {
          this.song = response.data;
        },
        error => {
          console.error('Error fetching song details:', error);
        }
      );
    });
  }
  onSubmit(): void {
    this.songService.updateSong(this.songId, this.song).subscribe(
      (response: any) => {
        console.log('Song updated successfully:', response);
        this.router.navigate(['/songs',this.songId]);
      },
      error => {
        console.error('Error updating song:', error);
      }
      
    );
  }
  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
}
