import { Component }              from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService }          from 'ngx-toastr';
import { QuestionsService }       from '../questions.service';
import { QuestionsManageService } from './questions-manage.service';

@Component({
    selector: 'app-questions-manage',
    templateUrl: './questions-manage.component.html',
    styleUrls: [ './questions-manage.component.scss' ]
})
export class QuestionsManageComponent {

    public constructor(public questionsManageService: QuestionsManageService,
                       private questionsService: QuestionsService,
                       private route: ActivatedRoute,
                       private router: Router,
                       private toastrService: ToastrService) {

        route.params.subscribe(params => {

            if (params.uuid) {

                questionsManageService.loadByUUID(params.uuid);

            } else {

                questionsManageService.reset();

            }

        });

    }

    public onButtonClick(): void {

        this.questionsManageService.save();

        // this.subscription = this.mappingManageService.save().subscribe((mapping: Mapping) => {
        //
        //     this.subscription.unsubscribe();
        //
        //     console.log(mapping);
        //
        //     this.toastrService.success(`Your mapping has been saved!`);
        //
        // });

        // this.ngxuxDetailsDialogService.open({
        //
        //     title: 'Name your Mapping'
        //
        // });

    }

    public onDeleteClick(): void {

        this.questionsManageService.delete().subscribe((result: boolean) => {

            if (result) {

                this.toastrService.success('Your question has been deleted!');

                this.router.navigate([ '/questions' ]);

            } else {

                this.toastrService.error('Your question could not be deleted. Please try again in a moment.');

            }

        });

    }

}
