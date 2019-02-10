import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import { GameComponent } from './game/game.component';
import { HomeComponent } from './home/home.component';
import { GameOverComponent } from './game-over/game-over.component';
import { ShakaZuluComponent } from './shaka-zulu/shaka-zulu.component';

const appRoutes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'game', component: GameComponent},
    {path: 'game-over', component: GameOverComponent},
    {path: 'shaka-zulu', component: ShakaZuluComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{
    
}