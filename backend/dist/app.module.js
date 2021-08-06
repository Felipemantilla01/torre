"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const jobs_controller_1 = require("./controllers/jobs.controller");
const people_controller_1 = require("./controllers/people.controller");
const jobs_service_1 = require("./services/jobs.service");
const people_service_1 = require("./services/people.service");
const mongoose_1 = require("@nestjs/mongoose");
const Resource_1 = require("./mongodb/Resource");
const config_service_1 = require("./services/config.service");
const config_controller_1 = require("./controllers/config.controller");
const config_1 = require("@nestjs/config");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: `.env`,
            }),
            common_1.HttpModule,
            mongoose_1.MongooseModule.forRoot(`mongodb://${process.env.MONGODB_HOST}/whats-next`),
            mongoose_1.MongooseModule.forFeature([
                { name: Resource_1.Resource.name, schema: Resource_1.ResourceSchema },
            ]),
        ],
        controllers: [jobs_controller_1.JobsController, people_controller_1.PeopleController, config_controller_1.ConfigController],
        providers: [jobs_service_1.JobsService, people_service_1.PeopleService, config_service_1.ConfigService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map