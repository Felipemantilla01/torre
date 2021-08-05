import { HttpService, Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AxiosResponse } from 'axios';

@Injectable()
export class PeopleService {
  constructor(private httpService: HttpService) {}

  getJobs(data): Observable<AxiosResponse<any[]>> {
    return this.httpService.post(
      'https://search.torre.co/people/_search/',
      data,
    );
  }
}
