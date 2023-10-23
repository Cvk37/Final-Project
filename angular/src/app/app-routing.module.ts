import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SongsViewComponent } from './songs-view/songs-view.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { ArtistSongsComponent } from './artist-songs/artist-songs.component';
import { AddSongComponent } from './add-song/add-song.component';
import { UpdateSongComponent } from './update-song/update-song.component';

const routes: Routes = [
  {path:'',component:SongsViewComponent},
  {path:'songs/:id', component:SongDetailsComponent },
  { path: 'artist/:artistName', component: ArtistSongsComponent },
  {path:'add-song',component:AddSongComponent},
  {path:'update-song/:id',component:UpdateSongComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
