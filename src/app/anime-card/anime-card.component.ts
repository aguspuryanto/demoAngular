import { Component, Input, OnInit } from '@angular/core';
import { AnimeInterface } from '../model/animeInterface';

@Component({
  selector: 'app-anime-card',
  templateUrl: './anime-card.component.html',
  styleUrls: ['./anime-card.component.scss']
})
export class AnimeCardComponent implements OnInit {
  @Input() anime: AnimeInterface;
  @Input() animeId: number;

  constructor() { }

  ngOnInit(): void {
  }

}
