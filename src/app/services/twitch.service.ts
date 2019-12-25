import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Client-ID': 'livbjmuyns0m686mhrvlqf1m84jf0i',
    // 'Authorization': 'my-auth-token'
    // 'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})

export class TwitchService {

  constructor(private http: HttpClient) { }

  public getVideos(): Observable<any> {
    return this.http.get<any>('https://api.twitch.tv/helix/videos?game_id=21779', httpOptions);
  }
}
