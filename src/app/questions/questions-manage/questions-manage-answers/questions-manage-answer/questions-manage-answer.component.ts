import { Component, Input, OnInit } from '@angular/core';
import { FormGroup }                from '@angular/forms';

@Component({
    selector: 'app-questions-manage-answer',
    templateUrl: './questions-manage-answer.component.html',
    styleUrls: [ './questions-manage-answer.component.scss' ]
})
export class QuestionsManageAnswerComponent implements OnInit {

    @Input() public group: FormGroup;
    @Input() public type: string;

    public ngOnInit(): void {


        console.log(this.group);

    }

}
