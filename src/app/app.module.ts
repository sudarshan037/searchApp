import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { JobSearchComponent } from './job-search/job-search.component';
import { SearchResultComponent } from './job-search/search-result.component';
import { SearchBoxComponent } from './job-search/search-box.component';
import { jobSearchInjectables } from './job-search/job-search.injectables';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent,
    SearchResultComponent,
    SearchBoxComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [jobSearchInjectables],
  bootstrap: [AppComponent]
})
export class AppModule { }
