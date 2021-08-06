export interface JobInArray {
    id: string;
    objective: string;
    slug: string;
    type: string;
    organizations: Array<{
        id: number;
        name: string;
        picture: string;
    }>;
    locations: Array<string>;
    remote: boolean;
    external: boolean;
    deadline: Date;
    created: Date;
    status: string;
    compensation: null | number;
    skills: Array<{
        name: string;
        experience: string;
        proficiency: string;
    }>;
    members: any[];
    questions: any[];
    context: {
        signaled: [];
    };
    _meta: any;
}
export interface Job {
    id: string;
    compensation: {
        code: string;
        currency: string;
        estimate: boolean;
        minAmount: number;
        maxAmount: number;
        periodicity: string;
        visible: boolean;
        conversionCurrency: string;
        minAmountConverted: number;
        maxAmountConverted: number;
    };
}
