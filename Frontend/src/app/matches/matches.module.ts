import { RouterModule } from '@angular/router';
import { MatchesActions } from '../store/matches/matches.actions';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatListModule
} from '@angular/material';
import { ListMatchesComponent } from './list-matches/list-matches.component';
import { MatchesService } from './matches.service';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    RouterModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatListModule,
  ],
  declarations: [ListMatchesComponent, ChatComponent],
  providers: [MatchesService, MatchesActions]
})
export class MatchesModule { }
