import { Schema, model, Types } from 'mongoose';
import { EMAIL_REGEXP } from '../constants';

const { ObjectId } = Types;

const defaultConfig = {
  strict: true,
  timestamps: {
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
  usePushEach: true,
};

//user
const UserSchema = new Schema(
  {
    mobile: {
      type: Number,
      unique: true,
      set: (v) => Number(v),
      required: true,
      validate: {
        validator: function (v) {
          return /^1[3456789]\d{9}$/.test(v);
        },
      },
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      validate: {
        validator: function (v) {
          return EMAIL_REGEXP.test(v);
        },
      },
      required: true,
    },
    username: {
      type: String,
      default: '默认名称',
    },
    description: {
      type: String,
      default: '描述一下你自己吧',
      min: 0,
      max: 50,
    },
    avatar: {
      type: ObjectId,
      ref: 'image',
    },
  },
  {
    ...defaultConfig,
  },
);

const UserModel = model('user', UserSchema);

export { UserModel, UserSchema };
