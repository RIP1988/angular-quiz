import { QuestionComponent } from './../quiz/question/question.component';
import { StartComponent } from './../quiz/start/start.component';
import { ExtrasComponent } from './../extras/extras.component';
import { QuizComponent } from './../quiz/quiz.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResultComponent } from '../quiz/result/result.component';

const routes: Routes = [
  { path: '', redirectTo: '/quiz/start', pathMatch: 'full'},
  { path: 'quiz', component: QuizComponent,
    children: [
      { path: '', redirectTo: '/quiz/start', pathMatch: 'full' },
      { path: 'start', component: StartComponent },
      { path: 'question', component: QuestionComponent },
      { path: 'result', component: ResultComponent }
    ]
  },
  { path: 'extras', component: ExtrasComponent },
  { path: '**', redirectTo: '/quiz/start' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
