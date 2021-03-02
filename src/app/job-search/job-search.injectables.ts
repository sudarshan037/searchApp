import {
    JobSearchService,
    THEMUSE_API_URL
} from "./job-search.service"

export const jobSearchInjectables: Array<any> = [
    {provide: JobSearchService, useClass: JobSearchService},
    {provide: THEMUSE_API_URL, useValue: THEMUSE_API_URL}
];