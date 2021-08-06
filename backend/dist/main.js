"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const logger = new common_1.Logger('Main');
async function bootstrap() {
    logger.debug(process.env.ENV_DESCRIPTION, 'ENV_DESCRIPTION');
    logger.debug(process.env.MONGODB_HOST, 'MONGODB_HOST');
    logger.debug(process.env.PORT, 'PORT');
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors();
    await app.listen(process.env.PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map