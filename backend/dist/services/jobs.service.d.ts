import { HttpService } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Job } from 'src/models/Job';
import { Response } from 'src/models/Response';
export declare class JobsService {
    private httpService;
    constructor(httpService: HttpService);
    avgPayments: {};
    getJobs(tag: any, params?: any): Observable<AxiosResponse<Response>>;
    getJob(id: any): Observable<AxiosResponse<Job>>;
    calculateAveragePay(query: {
        tag: string;
        size: number;
    }): Promise<any>;
}
