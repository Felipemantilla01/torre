import { Controller, Get, Query } from '@nestjs/common';
import { PeopleService } from 'src/services/people.service';

@Controller('people')
export class PeopleController {
  constructor(private peopleService: PeopleService) {}
  @Get()
  async getJobs(@Query() query: { tag: string }) {
    const result = await this.peopleService
      .getJobs({
        'skill/role': {
          text: query.tag,
          experience: '1-plus-year',
        },
      })
      .toPromise();
    return result.data;
  }
}
