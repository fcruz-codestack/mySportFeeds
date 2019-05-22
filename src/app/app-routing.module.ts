import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ContentAreaComponent } from './Components/content-area/content-area.component';
const appRoutes: Routes = [
  { path: 'score-board', component: ContentAreaComponent },
  { path: 'teams', component: ContentAreaComponent },
  { path: 'full-schedule', component: ContentAreaComponent },
  { path: 'standings', component: ContentAreaComponent },
  { path: '', redirectTo: '/score-board', pathMatch: 'full' }
];
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
