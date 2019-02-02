import { Injectable }                                                 from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable }                                                 from 'rxjs';
import { Question }                                                   from '../_lib/Question';
import { QuestionsService }                                           from '../questions.service';

@Injectable({
    providedIn: 'root'
})
export class QuestionsManageService {

    public question: Question;

    public formGroup: FormGroup = new FormGroup({

        type: new FormControl('SINGLE_CHOICE', Validators.required),
        status: new FormControl('ACTIVE', Validators.required),
        category: new FormControl('', Validators.required),

        name: new FormControl('', [

            Validators.required,
            Validators.minLength(4),
            Validators.maxLength(255)

        ]),

        description: new FormControl('', [

            Validators.minLength(4),
            Validators.maxLength(255)

        ]),

        answers: new FormArray([])

    });

    public constructor(private formBuilder: FormBuilder,
                       private questionsService: QuestionsService) {

        this.answerControlAdd();

    }

    public loadByUUID(uuid: string): void {

        this.questionsService.getByUUID(uuid).subscribe((question: Question) => {

            this.question = question;

            this.reset(question);

        });

    }

    public reset(question?: Question): void {

        console.log(question);

        if (question) {

            this.formGroup = new FormGroup({

                type: new FormControl('SINGLE_CHOICE', Validators.required),
                status: new FormControl('ACTIVE', Validators.required),
                category: new FormControl('', Validators.required),

                name: new FormControl(question.name, [

                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(255)

                ]),

                description: new FormControl(question.description, [

                    Validators.minLength(4),
                    Validators.maxLength(255)

                ]),

                answers: new FormArray([])

            });

        } else {

            this.formGroup = new FormGroup({

                type: new FormControl('SINGLE_CHOICE', Validators.required),
                status: new FormControl('ACTIVE', Validators.required),
                category: new FormControl('', Validators.required),

                name: new FormControl('', [

                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(255)

                ]),

                description: new FormControl('', [

                    Validators.minLength(4),
                    Validators.maxLength(255)

                ]),

                answers: new FormArray([])

            });

        }

    }

    public answerControlAdd(): void {

        (this.formGroup.get('answers') as FormArray).push(this.answerControlGet());

    }

    public answerControlGet(): FormGroup {

        return this.formBuilder.group({

            value: new FormControl('', [

                Validators.required,
                Validators.minLength(4),
                Validators.maxLength(255)

            ]),

            selected: new FormControl(),

            description: new FormControl(),

            score: new FormControl('', [

                Validators.min(0),
                Validators.max(100)

            ]),

        });

    }

    public save(): void {

        console.log(this.formGroup.value);

        this.questionsService.create({

            name: this.formGroup.value.name,
            description: this.formGroup.value.description,
            status: this.formGroup.value.status,
            type: this.formGroup.value.type,
            category: this.formGroup.value.category.uuid,
            answers: this.formGroup.value.answers,

        }).subscribe((question: Question) => {

            console.log(question);

        });

    }

    public delete(): Observable<boolean> {

        return this.questionsService.deleteByUUID(this.question.uuid);
 
    }

}
