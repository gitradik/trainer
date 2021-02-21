import { Model, DataTypes } from 'sequelize';
import sequelize from './_index';
import * as yup from 'yup';
import { modelValidate, SqlzError } from '../utils';

export class Acc extends Model {}

export enum AccShemas {
  SIGN_IN = 'sign-in',
  SIGN_UP = 'sign-up',
}

export class AccModel {
  id: number;
  name: string;
  email: string;
  pwd: string;
  createdAt: Date;
  updatedAt: Date;

  static schemas = {
    'sign-up': yup.object().shape({
      name: yup.string().required(),
      email: yup.string().email().required(),
      pwd: yup.string().trim().min(8).required(),
    }),
    'sign-in': yup.object().shape({
      email: yup.string().email().required(),
      pwd: yup.string().trim().min(8).required(),
    })
  };

  static async validate(payload: any, schemaName: string): Promise<SqlzError> {
    return await modelValidate(payload, AccModel.schemas[schemaName]);
  }
}

Acc.init(
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true
    },
    pwd: { 
      type: DataTypes.STRING(64),
      allowNull: false
    }
  },
  { 
    sequelize, 
    modelName: 'Acc' 
  }
);
