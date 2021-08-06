import { HttpService } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';
export declare class PeopleService {
    private httpService;
    constructor(httpService: HttpService);
    getJobs(data: any): Observable<AxiosResponse<any[]>>;
}
