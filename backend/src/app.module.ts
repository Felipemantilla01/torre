import { HttpModule, Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs.controller';
import { PeopleController } from './controllers/people.controller';
import { JobsService } from './services/jobs.service';
import { PeopleService } from './services/people.service';

@Module({
  imports: [HttpModule],
  controllers: [JobsController, PeopleController],
  providers: [JobsService, PeopleService],
})
export class AppModule {}
