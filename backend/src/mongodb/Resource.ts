import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

export type ResourceDocument = Resource & Document;

@Schema({ collection: 'resources' })
export class Resource {
  @Prop()
  _id?: Types.ObjectId;

  @Prop()
  name: string;

  @Prop()
  link: string;

  @Prop()
  image: string;

  @Prop()
  type: string;

  @Prop()
  external: boolean;
}

export const ResourceSchema = SchemaFactory.createForClass(Resource);
