import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import {ANIME} from '../../db-data';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.scss']
})
export class AnimeListComponent implements OnInit {
  // animes = ANIME;
  data:any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    const url ='https://jsonplaceholder.typicode.com/photos?albumId=1'
    this.http.get(url).subscribe((res)=>{
      this.data = res
      console.log(this.data)
    })
  }

}
