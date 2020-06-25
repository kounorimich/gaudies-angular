import { Injectable } from '@angular/core';
import { WORKS } from '../mock-works';
import {Work} from '../work';
import {Observable} from 'rxjs';
import {of} from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class WorkService {

  constructor() { }

  getWorks(): Observable<Work[]> {
    return of(WORKS);
  }
}
