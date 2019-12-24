import { getTestBed } from '@angular/core/testing';
import { TwitchService } from './services/twitch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StreamerLoL';

  constructor(private twitchService: TwitchService) {
  }

  ngOnInit() {
    this.getVideos();
  }

  getVideos() {
    return this.twitchService.getVideos().subscribe(data => {
      console.log(data);
    });
  }
}
