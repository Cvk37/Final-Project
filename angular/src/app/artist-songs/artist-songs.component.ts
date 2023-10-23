import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArtistSongsService } from '../artist-songs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-artist-songs',
  templateUrl: './artist-songs.component.html',
  styleUrls: ['./artist-songs.component.scss']
})
export class ArtistSongsComponent implements OnInit {
  artistName: string = '';
  songs: any[]=[]; // Define your song interface if available

  constructor(private route: ActivatedRoute, private artistSongsService: ArtistSongsService, private router:Router) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.artistName = params.get('artistName')!;
      this.fetchArtistSongs();
    });
  }

  fetchArtistSongs(): void {
    this.artistSongsService.getSongsByArtist(this.artistName)
      .subscribe(data => {
        this.songs = data;
      });
  }
  navigateToHomePage(): void {
    this.router.navigate(['/']);
  }
}
