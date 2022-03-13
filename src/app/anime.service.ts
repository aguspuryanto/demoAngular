import { Injectable } from '@angular/core';
   import {AnimeInterface} from './model/animeInterface';
   import {ANIME} from '../db-data';
   import {Observable, of} from 'rxjs';

   @Injectable({
     providedIn: 'root'
   })
   
   export class AnimeService {
    //  getAnime(id: number): Observable<AnimeInterface> {
    //    return of(ANIME.find(anime => anime.id === id + 1));
    //  }
   }