import { Injectable }                         from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';
import { ToastrService }                      from 'ngx-toastr';
import { Category }                           from '../../_lib/Category';
import { QuestionsCategoriesService }         from '../questions-categories.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionsCategoriesManageService {

    public category: Category;

    public formGroup: FormGroup = new FormGroup({

        name: new FormControl('', Validators.required),
        description: new FormControl(''),

    });

    public constructor(private questionsCategoriesService: QuestionsCategoriesService,
                       private router: Router,
                       private toastrService: ToastrService) {

    }

    public load(uuid: string): void {

        this.questionsCategoriesService.getByUUID(uuid).subscribe((category: Category) => {

            this.category = category;

            console.log(category);

        });

    }

    public delete(): void {

        this.questionsCategoriesService.deleteByUUID(this.category.uuid).subscribe((result: boolean) => {

            this.router.navigate([ '/questions/categories' ]);

            this.toastrService.success(`The category "${ this.category.name }" has been deleted!`);
            
        });

    }

}
