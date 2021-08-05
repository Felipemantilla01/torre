import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Job } from 'src/models/Job';

@Injectable()
export class JobsService {
  constructor(private httpService: HttpService) {}

  getJobs(data): Observable<AxiosResponse<any[]>> {
    return this.httpService.post(
      'https://search.torre.co/opportunities/_search/',
      data,
    );
  }
}
