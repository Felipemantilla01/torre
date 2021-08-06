import { Model } from 'mongoose';
import { Resource, ResourceDocument } from 'src/mongodb/Resource';
export declare class ConfigService {
    private resourceModel;
    constructor(resourceModel: Model<ResourceDocument>);
    getResources(): Promise<ResourceDocument[]>;
    createResource(resource: Resource): Promise<ResourceDocument>;
}
