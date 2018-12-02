import { AppRoutingModule } from './app-routing/app-routing.module';
import { QuestionService } from './services/question.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { ExtrasComponent } from './extras/extras.component';
import { StartComponent } from './quiz/start/start.component';
import { ResultComponent } from './quiz/result/result.component';
import { QuestionComponent } from './quiz/question/question.component';

@NgModule({
   declarations: [
      AppComponent,
      QuizComponent,
      ExtrasComponent,
      StartComponent,
      ResultComponent,
      QuestionComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule
   ],
   providers: [
      QuestionService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
