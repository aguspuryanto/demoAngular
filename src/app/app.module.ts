import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AnimeCardComponent } from './anime-card/anime-card.component';
import { AnimeProfileComponent } from './anime-profile/anime-profile.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from "@angular/common/http";
import { RepoListComponent } from './repo-list/repo-list.component';
import { MaterialModule } from './material.module';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { PaginationModule,PaginationConfig } from 'ngx-bootstrap/pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';
import { BsModalService } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [
    AppComponent,
    AnimeListComponent,
    AnimeCardComponent,
    AnimeProfileComponent,
    RepoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    }),
    RouterModule.forRoot([
      {path: '', component: RepoListComponent},
      {path: 'repo-detail/:id', component: RepoDetailComponent},
    ]),
    TooltipModule.forRoot(),
    MaterialModule,
    PaginationModule.forRoot(),
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [BsModalService, PaginationConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
