import { Component }                        from '@angular/core';
import { ActivatedRoute }                   from '@angular/router';
import { QuestionsCategoriesManageService } from './questions-categories-manage.service';

@Component({
    selector: 'app-questions-categories-manage',
    templateUrl: './questions-categories-manage.component.html',
    styleUrls: [ './questions-categories-manage.component.scss' ]
})
export class QuestionsCategoriesManageComponent {

    public constructor(private route: ActivatedRoute,
                       public questionsCategoriesManageService: QuestionsCategoriesManageService) {

        route.params.subscribe((params: any) => {

            questionsCategoriesManageService.load(params.uuid);

        });

    }

    public onDeleteClick(): void {

        this.questionsCategoriesManageService.delete();

    }

    public onButtonClick(): void {
        

    }

}
