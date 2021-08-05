import { Controller, Get, Param, Query } from '@nestjs/common';
import { JobsService } from 'src/services/jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}
  @Get()
  async getJobs(@Query() query: { tag: string }) {
    const result = await this.jobsService.getJobs(query.tag).toPromise();
    return result.data;
  }

  @Get('avg-pay')
  async averagaPay(@Query() query: { tag: string; size: number }) {
    const result = await this.jobsService.calculateAveragePay(query);
    return result;
  }
}
