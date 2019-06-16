import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { SearchTermVM } from '../models/search-term.vm';

@Injectable({
  providedIn: 'root'
})
export class RepairSearchService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<SearchTermVM[]> {
    if (term.length === 0) return of([]);
    return this.http.post<any>('api/Repair/GetBySearchTerm', { searchTerm: term });
  }
}
