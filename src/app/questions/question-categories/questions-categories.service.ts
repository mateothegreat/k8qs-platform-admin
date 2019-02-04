import { Injectable }                from '@angular/core';
import { Pageable }                  from '@ngxux/common';
import { Observable, ReplaySubject } from 'rxjs';
import { APIClient }                 from '../../_lib/APIClient';
import { Category }                  from '../_lib/Category';

@Injectable({
    providedIn: 'root'
})
export class QuestionsCategoriesService extends APIClient<Category> {

    public categories$: ReplaySubject<Pageable<Category>> = new ReplaySubject();

    public getPageable(): Observable<Pageable<Category>> {

        this._getPageable('questions/categories').subscribe((pageable: Pageable<Category>) => this.categories$.next(pageable));

        return this.categories$;

    }

    public getByUUID(uuid: string): Observable<Category> {

        return this.get(`questions/categories/${ uuid }`);

    }

    public deleteByUUID(uuid: string): Observable<boolean> {

        return this.delete(`questions/categories/${ uuid }`);

    }

    public create(category: Category): Observable<Category> {

        return this.post('questions/categories', category);

    }

}
