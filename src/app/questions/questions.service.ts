import { Injectable }    from '@angular/core';
import { DataTablePage } from '@ngxux/datatable';
import { Pageable }      from '@ngxux/datatable/lib/Pageable';
import { Observable }    from 'rxjs';
import { APIClient }     from '../_lib/APIClient';
import { Question }      from './_lib/Question';

@Injectable({
    providedIn: 'root'
})
export class QuestionsService extends APIClient<Question> {

    public getPageable(page?: DataTablePage): Observable<Pageable<Question>> {

        return this._getPageable('questions', page);

    }

    public getByUUID(uuid: string): Observable<Question> {

        return this.get(`questions/${ uuid }`);

    }

    public deleteByUUID(uuid: string): Observable<boolean> {

        return this.delete(`questions/${ uuid }`);

    }

    public updateByUUID(uuid: string, question: Question): Observable<Question> {

        return this.post(`questions/${ uuid }`, question);

    }

    public create(question: Question): Observable<Question> {

        return this.post(`questions`, question);

    }

}
