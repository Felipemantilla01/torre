import { JobsService } from 'src/services/jobs.service';
export declare class JobsController {
    private jobsService;
    constructor(jobsService: JobsService);
    getJobs(query: {
        tag: string;
    }): Promise<import("../models/Response").Response>;
    averagaPay(query: {
        tag: string;
        size: number;
    }): Promise<any>;
}
