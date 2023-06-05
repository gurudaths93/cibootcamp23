import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { SpeakersComponent } from './speakers/speakers.component';
import { ExploreComponent } from './explore/explore.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CountdownComponent } from './home/countdown/countdown.component';
import { TimetableComponent } from './schedule/timetable/timetable.component';
import { TablecontentComponent } from './schedule/timetable/tablecontent/tablecontent.component';
import { PlacesgridComponent } from './explore/placesgrid/placesgrid.component';
import { SurveyComponent } from './speakers/survey/survey.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ScheduleComponent,
    SpeakersComponent,
    ExploreComponent,
    FooterComponent,
    NotFoundComponent,
    CountdownComponent,
    TimetableComponent,
    TablecontentComponent,
    PlacesgridComponent,
    SurveyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
