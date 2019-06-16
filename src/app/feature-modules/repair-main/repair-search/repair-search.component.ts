import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { map, startWith, debounceTime, flatMap, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { RepairSearchService } from './repair-search.service';
import { SearchTermVM } from '../models/search-term.vm';
import { MatAutocomplete } from '@angular/material';

@Component({
  selector: 'app-repair-search',
  templateUrl: './repair-search.component.html',
  styleUrls: ['./repair-search.component.scss']
})
export class RepairSearchComponent implements OnInit {
  @ViewChild(MatAutocomplete) autoComplete: MatAutocomplete;
  searchControl = new FormControl();
  options: Observable<SearchTermVM[]>;

  constructor(private searchService: RepairSearchService) { }

  ngOnInit() {

    this.options = this.searchControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      switchMap(term => this.searchService.search(term))
    );

    this.autoComplete.optionSelected.subscribe(val => {
      //TODO:
    });

  }



}
