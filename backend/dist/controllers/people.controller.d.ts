import { PeopleService } from 'src/services/people.service';
export declare class PeopleController {
    private peopleService;
    constructor(peopleService: PeopleService);
    getJobs(query: {
        tag: string;
    }): Promise<any[]>;
}
