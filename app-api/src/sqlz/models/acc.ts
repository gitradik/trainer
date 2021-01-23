import { Model, DataTypes } from 'sequelize';
import sequelize from './_index';
import bcrypt from 'bcrypt';

export class Acc extends Model {
}

export class AccModel {
  id: number;
  name: string;
  pwd: string;
  createdAt: Date;
  updatedAt: Date;
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
