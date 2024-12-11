import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
//  private appid='APIKEY';

 private apiurl='https://weather-api73.p.rapidapi.com/weather';

  constructor(private http:HttpClient) { }

  searchWeatherByCity(city:string):Observable<any>{
     const headers=new HttpHeaders();
     .set('x-rapidapi-host', 'open-weather13.p.rapidapi.com');

     const options={headers};
     return this.http.get(`${this.apiurl}/${city}`,options);

  }
}

