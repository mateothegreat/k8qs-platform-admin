import { Injectable } from '@angular/core';
import { Pageable }   from '@ngxux/common';
import { Observable } from 'rxjs';
import { APIClient }  from '../_lib/APIClient';
import { Category }   from './_lib/Category';

@Injectable({
    providedIn: 'root'
})
export class CategoriesService extends APIClient<Category> {

    public getPageable(): Observable<Pageable<Category>> {

        return this._getPageable('categories');

    }

}
