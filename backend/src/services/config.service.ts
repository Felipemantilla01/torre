import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Resource, ResourceDocument } from 'src/mongodb/Resource';

@Injectable()
export class ConfigService {
  constructor(
    @InjectModel(Resource.name) private resourceModel: Model<ResourceDocument>,
  ) {}

  async getResources() {
    return await this.resourceModel.find({});
  }

  async createResource(resource: Resource) {
    resource._id = Types.ObjectId();
    return await this.resourceModel.create(resource);
  }
}
