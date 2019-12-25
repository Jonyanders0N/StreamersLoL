import { LolService } from './services/lol.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { TwitchService } from './services/twitch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'StreamerLoL';
  formSearch: FormGroup;

  constructor(private twitchService: TwitchService,
    private lolService: LolService) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.formSearch = new FormGroup({
      summonerName: new FormControl('Buero', Validators.required),
      streamerName: new FormControl('Buerinho', Validators.required),
      championId: new FormControl('29', Validators.required)
    });
  }

  onSubmit() {
    if (this.formSearch.valid) {
      this.getSummonerId();
    }
  }

  getSummonerId() {
    const form = this.formSearch.controls;
    this.lolService.getSummonerId(form['summonerName'].value).subscribe(data => {
      console.log(data);
    });
  }

  getMatchesId() {
    const form = this.formSearch.controls;
    this.lolService.getMatchesId(form['streamerName'].value, form['championId'].value).subscribe(data => {
      console.log(data);
    });
  }

  getVideos() {
    this.twitchService.getVideos().subscribe(data => {
      console.log(data);
    });
  }
}
