import { Component, OnInit, ViewChild } from '@angular/core';
import { NgxuxDatatableComponent }      from '@ngxux/datatable';
import { Pageable }                     from '@ngxux/datatable/lib/Pageable';
import { Question }                     from '../_lib/Question';
import { QuestionsService }             from '../questions.service';

@Component({
    selector: 'app-questions-search',
    templateUrl: './questions-search.component.html',
    styleUrls: [ './questions-search.component.scss' ]
})
export class QuestionsSearchComponent implements OnInit {

    @ViewChild(NgxuxDatatableComponent) public datatableRef: NgxuxDatatableComponent<Question>;

    public constructor(private questionsService: QuestionsService) {

    }

    public ngOnInit() {

        this.questionsService.getPageable().subscribe((pageable: Pageable<Question>) => {

            this.datatableRef.setPage(pageable);

        });

    }

}
