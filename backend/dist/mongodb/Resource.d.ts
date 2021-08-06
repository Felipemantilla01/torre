import { Document, Types } from 'mongoose';
export declare type ResourceDocument = Resource & Document;
export declare class Resource {
    _id?: Types.ObjectId;
    name: string;
    link: string;
    image: string;
    type: string;
    external: boolean;
}
export declare const ResourceSchema: import("mongoose").Schema<Document<Resource, any, any>, import("mongoose").Model<any, any, any>, undefined, any>;
