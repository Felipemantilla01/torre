declare type Types = 'free' | 'paid';

export interface Resource {
  external: boolean;
  image: string;
  link: string;
  name: string;
  type: Types;
  _id: string;
}
