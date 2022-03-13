import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { AnimeService } from '../anime.service';
import { AnimeInterface } from '../model/animeInterface';

@Component({
  selector: 'app-anime-profile',
  templateUrl: './anime-profile.component.html',
  styleUrls: ['./anime-profile.component.scss']
})
export class AnimeProfileComponent implements OnInit {
  anime: AnimeInterface;
  animeSubscription: Subscription;
  
  constructor(private route: ActivatedRoute,
    private animeService: AnimeService,
    private location: Location) { }

  ngOnInit(): void {
    this.getAnime();
  }

  getAnime(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    // this.animeSubscription = this.animeService.getAnime(id).subscribe(anime => this.anime = anime);
  }

  addComment(comment: string): void {
    if (comment) {
      this.anime.comments.push(comment);
    }
  }

  goBack(): void {
    // this.location.back();
  }

}
