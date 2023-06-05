import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ExploreComponent } from './explore/explore.component';
import { NotFoundComponent } from './not-found/not-found.component';
import {TimetableComponent} from './schedule/timetable/timetable.component'
import {TablecontentComponent} from './schedule/timetable/tablecontent/tablecontent.component'

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',  component: HomeComponent,},
  { path: 'schedule',  component: ScheduleComponent,},
  { path: 'speakers',  component: SpeakersComponent,},
  { path: 'explore',  component: ExploreComponent,},
  { path: '**',  component: NotFoundComponent,},
  { path: 'tabs', component: TimetableComponent , children: [
    { path: '', redirectTo: 'day1', pathMatch: 'full' },
    { path: '', redirectTo: 'day2', pathMatch: 'full' },
    { path: '', redirectTo: 'day3', pathMatch: 'full' },
    { path: '', redirectTo: 'day4', pathMatch: 'full' },
    { path: '', redirectTo: 'day5', pathMatch: 'full' },
    { path: ':fileUrl', component: TablecontentComponent }
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
