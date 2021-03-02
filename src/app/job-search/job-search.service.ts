import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchResult } from './search-result.model';

export const THEMUSE_API_URL = 'https://www.themuse.com/api/public/jobs';

@Injectable({
  providedIn: 'root'
})
export class JobSearchService {

  constructor(
    private http: HttpClient,
    @Inject(THEMUSE_API_URL) private apiUrl: string
  ) { }

  search(query: string): Observable<SearchResult[]> {
    const params: string = [
      `page=1`,
      `location=${query}`
    ].join('&');
    const queryUrl = `${this.apiUrl}?${params}`;
    console.log("getURL", queryUrl);
    return this.http.get(queryUrl).pipe(map(response => {
      return <any>response['results'].map(item => {
        return new SearchResult({
          name: item.name,
          publication_date: item.publication_date,
          location: item.locations.name,
          category: item.categories.name,
          level: item.levels.name,
          url: item.refs.landing_page,
          company: item.company.name
        });
      });
    }));
  }
}
