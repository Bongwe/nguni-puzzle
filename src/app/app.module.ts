import { BrowserModule } from '@angular/platform-browser';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CountdownModule } from 'ngx-countdown';
import { ShakaZuluComponent } from './shaka-zulu/shaka-zulu.component';
import { GameOverComponent } from './game-over/game-over.component';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    HomeComponent,
    ShakaZuluComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    CountdownModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
