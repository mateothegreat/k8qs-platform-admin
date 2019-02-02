import { Injectable }                from '@angular/core';
import { Pageable }                  from '@ngxux/common';
import { Observable, ReplaySubject } from 'rxjs';
import { APIClient }                 from '../_lib/APIClient';
import { Category }                  from './_lib/Category';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends APIClient<Category> {

    public categories$: ReplaySubject<Pageable<Category>> = new ReplaySubject();

    public getPageable(): Observable<Pageable<Category>> {

        this._getPageable('categories').subscribe((pageable: Pageable<Category>) => this.categories$.next(pageable));

        return this.categories$;

    }

    public create(category: Category): Observable<Category> {

        return this.post('categories', category);

    }

}
