import { Component, OnInit, ViewChild }                             from '@angular/core';
import { Router }                                                   from '@angular/router';
import { NgxuxDatatableComponent }                                  from '@ngxux/datatable';
import { Pageable }                                                 from '@ngxux/datatable/lib/Pageable';
import { NgxuxDetailsDialogDataService, NgxuxDetailsDialogService } from '@ngxux/details-dialog';
import { ToastrService }                                            from 'ngx-toastr';
import { Category }                                                 from '../_lib/Category';
import { QuestionsCategoriesService }                               from './questions-categories.service';

@Component({
    selector: 'app-question-categories',
    templateUrl: './question-categories.component.html',
    styleUrls: [ './question-categories.component.scss' ]
})
export class QuestionCategoriesComponent implements OnInit {

    @ViewChild(NgxuxDatatableComponent) public datatableRef: NgxuxDatatableComponent<Category>;

    public constructor(private categoriesService: QuestionsCategoriesService,
                       private detailsDialogService: NgxuxDetailsDialogService,
                       private detailsDialogDataService: NgxuxDetailsDialogDataService,
                       private toastrService: ToastrService,
                       private router: Router) {

    }

    public ngOnInit() {

        this.categoriesService.getPageable().subscribe((pageable: Pageable<Category>) => this.datatableRef.setPage(pageable));

        this.datatableRef.clicks$.subscribe((category: Category) => {

            if (category.uuid) {

                this.router.navigate([ `/questions/categories/${ category.uuid }` ]);

            }

        });

    }

    public onSortChange(e: any): void {

    }

    public onAddCategoryClick(): void {

        this.detailsDialogDataService.click$.subscribe((value: Category) => {

            this.categoriesService.create(value).subscribe((category: Category) => {

                this.categoriesService.getPageable();

                this.detailsDialogService.close();

                this.toastrService.success(`The category "${ category.name }" has been created!`);

            });

        });

        this.detailsDialogService.open({ title: 'Add Category' });

    }

}
