import { Component, ElementRef, EventEmitter, OnInit, Output } from "@angular/core";
import { fromEvent } from "rxjs";
import { map, filter, debounceTime, tap, switchAll } from "rxjs/operators";
import { JobSearchService } from "./job-search.service";
import { SearchResult } from "./search-result.model";

@Component({
    selector: 'app-search-box',
    template: `<input type="text" class="form-control" placeholder="Search" autofocus>`
})
export class SearchBoxComponent implements OnInit {
    @Output() loading: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() results: EventEmitter<SearchResult[]> = new EventEmitter<SearchResult[]>();

    constructor(private job: JobSearchService,
        private el: ElementRef) {

    }

    ngOnInit(): void {
        //convert the 'keyup' event into an observable stream
        fromEvent(this.el.nativeElement, 'keyup')
            .pipe(map((e: any) => e.target.value)) // extract the value of the input
            .pipe(filter((text: string) => text.length > 1)) // filter out if empty
            .pipe(debounceTime(500))                         // only once every 250ms
            .pipe(tap(() => this.loading.emit(true)))         // enable loading
            //search, discarding old events if new input comes in
            .pipe(map((query: string) => this.job.search(query)))
            .pipe(switchAll())
            // act on the return of the search
            .subscribe(
                (results: SearchResult[]) => { //on success
                    this.loading.emit(false);
                    this.results.emit(results);
                    console.log("the results is", results);
                },
                (err: any) => { // on error
                    console.log(err);
                    this.loading.emit(false);
                },
                () => { // on completion
                    this.loading.emit(false);
                }
            );
    }
}