import { Component, Input } from '@angular/core';
import { FormGroup }        from '@angular/forms';

@Component({
    selector: 'app-questions-manage-answer-input',
    templateUrl: './questions-manage-answer-input.component.html',
    styleUrls: [ './questions-manage-answer-input.component.scss' ]
})
export class QuestionsManageAnswerInputComponent {

    @Input() public group: FormGroup;

}
