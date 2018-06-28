import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ScreenLoginComponent } from './screen-login/screen-login.component';
import { ScreenEvaluationFormComponent } from './screen-evaluation-form/screen-evaluation-form.component';
import { ScreenPageNotFoundComponent } from './screen-page-not-found/screen-page-not-found.component';
<<<<<<< HEAD
import { EvaluationEntryComponent } from './evaluation-entry/evaluation-entry.component';
=======
import { ScreenAppealFormComponent } from './screen-appeal-form/screen-appeal-form.component';
>>>>>>> kyle

const appRoutes: Routes = [
    { path: 'login', 
        component: ScreenLoginComponent },
    { path: 'evaluation',
        component: ScreenEvaluationFormComponent,
    },
    { path: 'appeal',
        component: ScreenAppealFormComponent,
    },
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
    },
    { path: '**', component: ScreenPageNotFoundComponent }
];

@NgModule({
    declarations: [
        AppComponent,
        ScreenLoginComponent,
        ScreenEvaluationFormComponent,
        ScreenPageNotFoundComponent,
<<<<<<< HEAD
        EvaluationEntryComponent
=======
        ScreenAppealFormComponent
>>>>>>> kyle
    ],
  imports: [
      FormsModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ),
        BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }