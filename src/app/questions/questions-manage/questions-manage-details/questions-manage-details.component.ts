import { Component }              from '@angular/core';
import { QuestionType }           from '../../_lib/QuestionType';
import { QuestionsManageService } from '../questions-manage.service';

@Component({
    selector: 'app-questions-manage-details',
    templateUrl: './questions-manage-details.component.html',
    styleUrls: [ './questions-manage-details.component.scss' ]
})
export class QuestionsManageDetailsComponent {

    public questionTypes: Array<QuestionType> = QuestionType.TYPES;

    public constructor(public questionsManageService: QuestionsManageService) {

    }

}
