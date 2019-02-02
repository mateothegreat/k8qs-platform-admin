import { Component }              from '@angular/core';
import { Pageable }               from '@ngxux/common';
import { Category }               from '../../_lib/Category';
import { CategoriesService }      from '../../categories.service';
import { QuestionsManageService } from '../questions-manage.service';

@Component({
    selector: 'app-questions-manage-category',
    templateUrl: './questions-manage-category.component.html',
    styleUrls: [ './questions-manage-category.component.scss' ]
})
export class QuestionsManageCategoryComponent {

    public categories: Array<Category>;

    public constructor(private categoriesService: CategoriesService,
                       public questionsManageService: QuestionsManageService) {

        categoriesService.getPageable().subscribe((categories: Pageable<Category>) => this.categories = categories.content);

    }

}
