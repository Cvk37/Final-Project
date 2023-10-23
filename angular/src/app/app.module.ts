import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SongsViewComponent } from './songs-view/songs-view.component';
import { HttpClientModule } from '@angular/common/http';
import { SongDetailsComponent } from './song-details/song-details.component';
import { ArtistSongsComponent } from './artist-songs/artist-songs.component';
import { AddSongComponent } from './add-song/add-song.component';
import { FormsModule } from '@angular/forms';
import { UpdateSongComponent } from './update-song/update-song.component';

@NgModule({
  declarations: [
    AppComponent,
    SongsViewComponent,
    SongDetailsComponent,
    ArtistSongsComponent,
    AddSongComponent,
    UpdateSongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
