"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobsService = void 0;
const common_1 = require("@nestjs/common");
const Job_1 = require("../models/Job");
const Response_1 = require("../models/Response");
let JobsService = class JobsService {
    constructor(httpService) {
        this.httpService = httpService;
        this.avgPayments = {};
    }
    getJobs(tag, params) {
        return this.httpService.post('https://search.torre.co/opportunities/_search/', {
            'skill/role': {
                text: tag,
                experience: 'potential-to-develop',
            },
        }, {
            params,
        });
    }
    getJob(id) {
        return this.httpService.get(`https://torre.co/api/opportunities/${id}`);
    }
    async calculateAveragePay(query) {
        if (this.avgPayments[query.tag]) {
            return this.avgPayments[query.tag];
        }
        else {
            const avgPayments = {
                payments: [],
                avgPayment: 0,
                currency: '$USD',
            };
            const result = await this.getJobs(query.tag, {
                size: query.size,
                offset: 0,
            }).toPromise();
            for (let job of result.data.results) {
                const _job = job;
                const res = await this.getJob(_job.id).toPromise();
                const compensation = res.data.compensation;
                if (compensation &&
                    compensation.visible &&
                    compensation.conversionCurrency == 'USD$') {
                    if (compensation.periodicity == 'monthly') {
                        if (compensation.maxAmountConverted != 0)
                            avgPayments.payments.push(compensation.maxAmountConverted);
                        else if (compensation.minAmountConverted != 0)
                            avgPayments.payments.push(compensation.minAmountConverted);
                    }
                    else if (compensation.periodicity == 'yearly') {
                        if (compensation.maxAmountConverted != 0)
                            avgPayments.payments.push(compensation.maxAmountConverted / 12);
                        else if (compensation.minAmountConverted != 0)
                            avgPayments.payments.push(compensation.minAmountConverted / 12);
                    }
                }
            }
            avgPayments.payments.forEach((pay) => {
                avgPayments.avgPayment += pay;
            });
            avgPayments.avgPayment =
                avgPayments.avgPayment / avgPayments.payments.length;
            this.avgPayments[query.tag] = avgPayments;
            return this.avgPayments[query.tag];
        }
    }
};
JobsService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [common_1.HttpService])
], JobsService);
exports.JobsService = JobsService;
//# sourceMappingURL=jobs.service.js.map