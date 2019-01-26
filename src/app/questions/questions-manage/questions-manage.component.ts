import { Component }              from '@angular/core';
import { ActivatedRoute }         from '@angular/router';
import { QuestionsManageService } from './questions-manage.service';

@Component({
    selector: 'app-questions-manage',
    templateUrl: './questions-manage.component.html',
    styleUrls: [ './questions-manage.component.scss' ]
})
export class QuestionsManageComponent {

    public constructor(public questionsManageService: QuestionsManageService,
                       private route: ActivatedRoute) {

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

        // this.mappingManageService.delete().subscribe((result: boolean) => {
        //
        //     if (result) {
        //
        //         this.toastrService.success('Your mapping has been deleted!');
        //
        //         this.router.navigate([ '/mapping/search' ]);
        //
        //     } else {
        //
        //         this.toastrService.error('Your mapping could not be deleted. Please try again in a moment.');
        //
        //     }
        //
        // });

    }

}
