import { Component }               from '@angular/core';
import { Router }                  from '@angular/router';
import { NgxuxMatHeaderNavButton } from '@ngxux/ngxux-mat-header-nav/lib/ngxux-mat-header-nav-button';

@Component({
    selector: 'app-questions',
    templateUrl: './questions.component.html',
    styleUrls: [ './questions.component.scss' ]
})
export class QuestionsComponent {

    public constructor(private router: Router) {
    }

    public onHeaderNavButtonClick(e: NgxuxMatHeaderNavButton): void {

        if (e.label === 'Add Question') {

            this.router.navigate([ '/questions/create' ]);

        }

    }

}
