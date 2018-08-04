import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ScreenLoginComponent } from './screen-login/screen-login.component';
import { ScreenEvaluationFormComponent } from './screen-evaluation-form/screen-evaluation-form.component';
import { ScreenPageNotFoundComponent } from './screen-page-not-found/screen-page-not-found.component';
import { EvaluationEntryComponent } from './evaluation-entry/evaluation-entry.component';
import { ScreenAppealFormComponent } from './screen-appeal-form/screen-appeal-form.component';
import { ScreenEvaluationPayFormComponent } from './screen-evaluation-pay-form/screen-evaluation-pay-form.component';
import { ScreenMasterFormComponent } from './screen-master-form/screen-master-form.component';
import { SectionResponsibilitiesAndGoalsComponent } from './section-responsibilities-and-goals/section-responsibilities-and-goals.component';
import { SectionEmployeeInformationComponent } from './section-employee-information/section-employee-information.component';
import { SectionCoreValuesComponent } from './section-core-values/section-core-values.component';
import { SectionLeadershipAssessmentComponent } from './section-leadership-assessment/section-leadership-assessment.component';
import { SectionProfessionalDevelopmentPlanComponent } from './section-professional-development-plan/section-professional-development-plan.component';
import { SectionNarrativeSummaryComponent } from './section-narrative-summary/section-narrative-summary.component';
import { SectionCommentsComponent } from './section-comments/section-comments.component';
import { SectionSignaturesComponent } from './section-signatures/section-signatures.component';
import { SectionAppealInformationComponent } from './section-appeal-information/section-appeal-information.component';
import { SectionWrittenAppealComponent } from './section-written-appeal/section-written-appeal.component';

const appRoutes: Routes = [
    { path: 'login', 
        component: ScreenLoginComponent 
    },
    { path: 'pay', 
        component: ScreenEvaluationPayFormComponent 
    },
    { path: 'evaluation',
        component: ScreenEvaluationFormComponent,
    },
    { path: 'appeal',
        component: ScreenAppealFormComponent,
    },
    { path: 'master',
        component: ScreenMasterFormComponent,
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
        EvaluationEntryComponent,
        ScreenAppealFormComponent,
        ScreenEvaluationPayFormComponent,
        ScreenMasterFormComponent,
        SectionResponsibilitiesAndGoalsComponent,
        SectionEmployeeInformationComponent,
        SectionCoreValuesComponent,
        SectionLeadershipAssessmentComponent,
        SectionProfessionalDevelopmentPlanComponent,
        SectionNarrativeSummaryComponent,
        SectionCommentsComponent,
        SectionSignaturesComponent,
        SectionAppealInformationComponent,
        SectionWrittenAppealComponent
    ],
  imports: [
      FormsModule,
      RouterModule.forRoot(
          appRoutes,
          { enableTracing: true }
        ),
        BrowserModule,
        HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }