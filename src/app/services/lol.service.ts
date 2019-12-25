import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json;charset=utf-8'
  })
};

@Injectable({
  providedIn: 'root'
})
export class LolService {

  url = 'https://br1.api.riotgames.com/';
  apiKey = 'RGAPI-a58857f9-3741-4d67-b6cf-7222774429f8';
  endIndex = 100;
  beginIndex = 0;

  constructor(private http: HttpClient) { }

  getSummonerId(summonerId: string): Observable<any> {
    const reference = 'lol/summoner/v4/summoners/by-name';
    return this.http.get(`${this.url}/${reference}/${summonerId}?api_key=${this.apiKey}`);
  }

  getMatchesId(streamerI: string, championId: string): Observable<any> {
    const reference = 'lol/match/v4/matchlists/by-account';
    return this.http.get(
        `${this.url}/${reference}/${streamerI}?${championId}&${this.endIndex}&${this.beginIndex}&api_key=${this.apiKey}`);
  }


}
