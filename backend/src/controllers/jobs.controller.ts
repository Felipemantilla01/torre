import { Controller, Get, Param, Query } from '@nestjs/common';
import { JobsService } from 'src/services/jobs.service';

@Controller('jobs')
export class JobsController {
  constructor(private jobsService: JobsService) {}
  @Get()
  async getJobs(@Query() query: { tag: string }) {
    const result = await this.jobsService
      .getJobs({
        'skill/role': {
          text: query.tag,
          experience: 'potential-to-develop',
        },
      })
      .toPromise();
    return result.data;
  }
}
