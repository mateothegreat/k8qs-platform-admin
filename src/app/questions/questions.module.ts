import { CommonModule }                          from '@angular/common';
import { NgModule }                              from '@angular/core';
import { RouterModule }                          from '@angular/router';
import { SharedModule }                          from '../shared/shared.module';
import { QuestionAnswerSetsComponent }           from './question-answer-sets/question-answer-sets.component';
import { QuestionCategoriesComponent }           from './question-categories/question-categories.component';
import { QuestionsManageAnswerBooleanComponent } from './questions-manage/questions-manage-answers/questions-manage-answer/questions-manage-answer-boolean/questions-manage-answer-boolean.component';
import { QuestionsManageAnswerInputComponent }   from './questions-manage/questions-manage-answers/questions-manage-answer/questions-manage-answer-input/questions-manage-answer-input.component';
import { QuestionsManageAnswerComponent }        from './questions-manage/questions-manage-answers/questions-manage-answer/questions-manage-answer.component';
import { QuestionsManageAnswersComponent }       from './questions-manage/questions-manage-answers/questions-manage-answers.component';
import { QuestionsManageDetailsComponent }       from './questions-manage/questions-manage-details/questions-manage-details.component';
import { QuestionsManageComponent }              from './questions-manage/questions-manage.component';
import { QuestionsSearchComponent }              from './questions-search/questions-search.component';
import { QuestionsComponent }                    from './questions.component';
import { QuestionsManageCategoryComponent } from './questions-manage/questions-manage-category/questions-manage-category.component';

@NgModule({
    declarations: [

        QuestionsComponent,
        QuestionsSearchComponent,
        QuestionsManageComponent,
        QuestionsManageDetailsComponent,
        QuestionsManageAnswersComponent,
        QuestionsManageAnswerComponent,
        QuestionsManageAnswerBooleanComponent,
        QuestionsManageAnswerInputComponent,
        QuestionAnswerSetsComponent,
        QuestionCategoriesComponent,
        QuestionsManageCategoryComponent

    ],

    imports: [

        CommonModule,
        SharedModule,

        RouterModule.forChild([

            {

                path: 'questions',
                component: QuestionsComponent,

                children: [

                    {

                        path: 'search',
                        component: QuestionsSearchComponent

                    }, {

                        path: 'categories',
                        component: QuestionCategoriesComponent

                    }, {

                        path: 'answer-sets',
                        component: QuestionAnswerSetsComponent

                    }, {

                        path: 'create',
                        component: QuestionsManageComponent

                    }, {

                        path: 'manage/:uuid',
                        component: QuestionsManageComponent

                    }, {

                        path: '',
                        pathMatch: 'full',
                        redirectTo: 'search'

                    }

                ]

            }

        ])

    ]

})
export class QuestionsModule {
}
