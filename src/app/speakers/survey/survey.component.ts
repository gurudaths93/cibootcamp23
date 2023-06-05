import { HttpClient } from '@angular/common/http';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent {

  getSurveyUrl="https://bootcamp23.azurewebsites.net/getSurveyResults";
  questions = []
  question = {}
  show = false;
  constructor(private http: HttpClient) { }
  ngOnInit(){
    this.http.get(this.getSurveyUrl).subscribe((data) =>{
      for(let question in data["feedbackResults"]){
      this.question["question"] = question["Q"];
      this.question["options"] = question["options"];
      this.questions.push(this.question);
    }
    });
    this.show = true;
  }
}
