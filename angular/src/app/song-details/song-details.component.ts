import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SongService } from '../song.service';

@Component({
  selector: 'app-song-details',
  templateUrl: './song-details.component.html',
  styleUrls: ['./song-details.component.scss']
})
export class SongDetailsComponent implements OnInit{
  songName: string = ''
  songDetails: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private songService: SongService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const songId = params['id'];
      this.songService.getSongDetailsById(songId).subscribe(
        (response: any) => {
          this.songDetails = response.data;
          this.songName = this.songDetails.title;
        },
        (error: any) => {
          console.error('Error fetching player stats:', error);
        }
      );
    });
  }
  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
  navigateToUpdateSong():void{
    this.router.navigate([`/update-song/${this.songDetails._id}`]);
  }
  deleteSong(): void {
    if (!confirm('Are you sure you want to delete this song?')) {
      return;
    }

    const songId = this.songDetails._id;
    this.songService.deleteSong(songId).subscribe(
      () => {
        console.log('Song deleted successfully');
        // Navigate back to the main page after deletion
        this.router.navigateByUrl('/');
      },
      (error: any) => {
        console.error('Error deleting song:', error);
      }
    );
  }
}
