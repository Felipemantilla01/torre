import { Body, Controller, Get, Post } from '@nestjs/common';
import { Resource } from 'src/mongodb/Resource';
import { ConfigService } from 'src/services/config.service';

@Controller('config')
export class ConfigController {
  constructor(private configService: ConfigService) {}

  @Get('get-resources')
  getResources() {
    return this.configService.getResources();
  }

  @Post('create-resource')
  createResource(@Body() body: Resource) {
    return this.configService.createResource(body);
  }
}
