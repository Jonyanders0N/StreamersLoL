import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LolService {

  constructor(private http: HttpClient) { }

  getSummonerId(name: string) {
    return this.http.get<any>('http://localhost:8000/api/lol/' + name).subscribe( data => {
      console.log(data);
    });
  }

  // getSummonerId(summonerId: string): Observable<any> {
  //   const reference = 'lol/summoner/v4/summoners/by-name';
  //   return this.http.get(`${this.url}/${reference}/${summonerId}?api_key=${this.apiKey}`, httpOptions);
  // }

  // getMatchesId(accountId: string, championId: string): Observable<any> {
  //   const reference = 'lol/match/v4/matchlists/by-account';
  //   return this.http.get(
  //     // tslint:disable-next-line:max-line-length
  // tslint:disable-next-line:max-line-length
  //     `${this.url}/${reference}/${this.accountId}?champion=${championId}&endIndex=${this.endIndex}&beginIndex=${this.beginIndex}&api_key=${this.apiKey}`);
  // }


}
