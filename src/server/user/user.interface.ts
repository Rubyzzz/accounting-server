// user.interface.ts
import { Document } from 'mongoose';

export interface User extends Document {
  readonly _id: string;
  readonly mobile: string;
  readonly password: string;
  readonly username: string;
  readonly description: string;
  readonly avatar: string;
}
