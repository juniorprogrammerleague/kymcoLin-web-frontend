import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap, distinctUntilChanged } from 'rxjs/operators';
import { RepairSearchService } from './repair-search.service';
import { SearchTermVM } from '../models/search-term.vm';
import { MatAutocomplete } from '@angular/material';
import { RepairManagementService } from '../repair-management.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-repair-search',
  templateUrl: './repair-search.component.html',
  styleUrls: ['./repair-search.component.scss']
})
export class RepairSearchComponent implements OnInit {
  @ViewChild(MatAutocomplete) autoComplete: MatAutocomplete;
  @Output() searchHandler = new EventEmitter();
  searchControl = new FormControl();
  options: Observable<SearchTermVM[]>;

  constructor(private router: Router,
    private searchService: RepairSearchService,
    private managementService: RepairManagementService) { }

  ngOnInit() {
    if (this.managementService.licensePlateNo) {
      this.searchControl.setValue(this.managementService.licensePlateNo);
    }

    this.options = this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(term => this.searchService.search(term))
    );

    this.autoComplete.optionSelected.subscribe(item => {
      this.managementService.licensePlateNo = item.option.value;
      this.searchHandler.emit(item.option.value);
    });

  }

}
