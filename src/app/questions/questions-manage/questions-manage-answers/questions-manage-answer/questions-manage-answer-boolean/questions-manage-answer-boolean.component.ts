import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
    selector: 'app-questions-manage-answer-boolean',
    templateUrl: './questions-manage-answer-boolean.component.html',
    styleUrls: [ './questions-manage-answer-boolean.component.scss' ]
})
export class QuestionsManageAnswerBooleanComponent {

    @Input() public group: FormGroup;

}
