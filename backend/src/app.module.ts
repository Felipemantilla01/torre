import { HttpModule, Module } from '@nestjs/common';
import { JobsController } from './controllers/jobs.controller';
import { PeopleController } from './controllers/people.controller';
import { JobsService } from './services/jobs.service';
import { PeopleService } from './services/people.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Resource, ResourceSchema } from './mongodb/Resource';
import { ConfigService } from './services/config.service';
import { ConfigController } from './controllers/config.controller';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env`,
    }),
    HttpModule,
    MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOST}/whats-next`),
    MongooseModule.forFeature([
      { name: Resource.name, schema: ResourceSchema },
    ]),
  ],
  controllers: [JobsController, PeopleController, ConfigController],
  providers: [JobsService, PeopleService, ConfigService],
})
export class AppModule {}
