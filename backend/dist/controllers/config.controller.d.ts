import { Resource } from 'src/mongodb/Resource';
import { ConfigService } from 'src/services/config.service';
export declare class ConfigController {
    private configService;
    constructor(configService: ConfigService);
    getResources(): Promise<import("src/mongodb/Resource").ResourceDocument[]>;
    createResource(body: Resource): Promise<import("src/mongodb/Resource").ResourceDocument>;
}
