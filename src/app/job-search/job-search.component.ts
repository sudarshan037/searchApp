import { Component, OnInit } from '@angular/core';
import { SearchResult } from './search-result.model';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  results: SearchResult[];
  loading: boolean;
  constructor() { }

  ngOnInit(){
  }

  updateResults(results: SearchResult[]): void {
    this.results = results;
    console.log("results:", this.results);
  }

}
