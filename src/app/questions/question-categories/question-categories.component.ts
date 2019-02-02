import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxuxDatatableComponent }      from '@ngxux/datatable';
import { Pageable }                     from '@ngxux/datatable/lib/Pageable';
import { Category }                     from '../_lib/Category';
import { CategoriesService }            from '../categories.service';

@Component({
    selector: 'app-question-categories',
    templateUrl: './question-categories.component.html',
    styleUrls: [ './question-categories.component.scss' ]
})
export class QuestionCategoriesComponent implements OnInit {

    @ViewChild(NgxuxDatatableComponent) public datatableRef: NgxuxDatatableComponent<Category>;

    public constructor(private categoriesService: CategoriesService) {

    }

    public ngOnInit() {

        this.categoriesService.getPageable().subscribe((pageable: Pageable<Category>) => this.datatableRef.setPage(pageable));

    }

    public onSortChange(e: any): void {

    }
}
