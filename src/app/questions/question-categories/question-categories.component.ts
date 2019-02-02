import { Component, OnInit, ViewChild }                             from '@angular/core';
import { NgxuxDatatableComponent }                                  from '@ngxux/datatable';
import { Pageable }                                                 from '@ngxux/datatable/lib/Pageable';
import { NgxuxDetailsDialogDataService, NgxuxDetailsDialogService } from '@ngxux/details-dialog';
import { ToastrService }                                            from 'ngx-toastr';
import { Category }                                                 from '../_lib/Category';
import { CategoriesService }                                        from '../categories.service';

@Component({
    selector: 'app-question-categories',
    templateUrl: './question-categories.component.html',
    styleUrls: [ './question-categories.component.scss' ]
})
export class QuestionCategoriesComponent implements OnInit {

    @ViewChild(NgxuxDatatableComponent) public datatableRef: NgxuxDatatableComponent<Category>;

    public constructor(private categoriesService: CategoriesService,
                       private detailsDialogService: NgxuxDetailsDialogService,
                       private detailsDialogDataService: NgxuxDetailsDialogDataService,
                       private toastrService: ToastrService) {

    }

    public ngOnInit() {

        this.categoriesService.getPageable().subscribe((pageable: Pageable<Category>) => this.datatableRef.setPage(pageable));

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
