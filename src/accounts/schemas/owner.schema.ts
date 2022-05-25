import { Schema, SchemaFactory } from '@nestjs/mongoose';

export type OwnerDocument = Owner & Document;

@Schema()
export class Owner {}

export const OwnerSchema = SchemaFactory.createForClass(Owner);
