import { compileNgModule } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'weather-app';
  searchForm!:FormGroup
  constructor(private fb:FormBuilder, private service:WeatherService){}

 
  ngOnInit(){
   this.searchForm=this.fb.group({
      city:[null,Validators.required]
    })
  }

  changeWeather(){
    console.log(this.searchForm.value);
    this.service.searchWeatherByCity(this.searchForm.get([city])!.value).subscribe((result)=>{
      console.log(result);
      
    })
  }
}
