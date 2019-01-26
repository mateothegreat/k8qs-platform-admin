import { Component }              from '@angular/core';
import { QuestionsManageService } from '../questions-manage.service';

@Component({
    selector: 'app-questions-manage-answers',
    templateUrl: './questions-manage-answers.component.html',
    styleUrls: [ './questions-manage-answers.component.scss' ]
})
export class QuestionsManageAnswersComponent {

    public constructor(public questionsManageService: QuestionsManageService) {

        console.log(questionsManageService.formGroup.get('answers'));

    }

}
