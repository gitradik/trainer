import { Model, DataTypes } from 'sequelize';
import sequelize from './_index';
import bcrypt from 'bcrypt';
import * as yup from 'yup';

export class Acc extends Model {
}

export class AccModel {
  id: number;
  name: string;
  email: string;
  pwd: string;
  createdAt: Date;
  updatedAt: Date;

  static get signInShema(): any {
    return yup.object().shape({
      email: yup.string().email().required(),
      pwd: yup.string().trim().min(8).required(),
    })
  }
}

Acc.init(
  {
    name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING(50),
      allowNull: false
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
