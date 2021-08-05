import { HttpService, Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { Job, JobInArray } from 'src/models/Job';
import { Response } from 'src/models/Response';

@Injectable()
export class JobsService {
  constructor(private httpService: HttpService) {}

  avgPayments = {};

  getJobs(tag, params?): Observable<AxiosResponse<Response>> {
    return this.httpService.post(
      'https://search.torre.co/opportunities/_search/',
      {
        'skill/role': {
          text: tag,
          experience: 'potential-to-develop',
        },
      },
      {
        params,
      },
    );
  }

  getJob(id): Observable<AxiosResponse<Job>> {
    return this.httpService.get(`https://torre.co/api/opportunities/${id}`);
  }

  async calculateAveragePay(query: { tag: string; size: number }) {
    if (this.avgPayments[query.tag]) {
      return this.avgPayments[query.tag];
    } else {
      const avgPayments = {
        payments: [],
        avgPayment: 0,
        currency: '$USD',
      };
      const result = await this.getJobs(query.tag, {
        size: query.size,
        offset: 0,
      }).toPromise();

      for (let job of result.data.results) {
        const _job = job as Job;
        const res = await this.getJob(_job.id).toPromise();
        const compensation = res.data.compensation;
        if (
          compensation &&
          compensation.visible &&
          compensation.conversionCurrency == 'USD$'
        ) {
          if (compensation.periodicity == 'monthly') {
            if (compensation.maxAmountConverted != 0)
              avgPayments.payments.push(compensation.maxAmountConverted);
            else if (compensation.minAmountConverted != 0)
              avgPayments.payments.push(compensation.minAmountConverted);
          } else if (compensation.periodicity == 'yearly') {
            if (compensation.maxAmountConverted != 0)
              avgPayments.payments.push(compensation.maxAmountConverted / 12);
            else if (compensation.minAmountConverted != 0)
              avgPayments.payments.push(compensation.minAmountConverted / 12);
          }
        }
      }

      avgPayments.payments.forEach((pay) => {
        avgPayments.avgPayment += pay;
      });
      avgPayments.avgPayment =
        avgPayments.avgPayment / avgPayments.payments.length;
      // result.data.results.forEach(async (job: JobInArray) => {});

      this.avgPayments[query.tag] = avgPayments;

      return this.avgPayments[query.tag];
    }
  }
}
