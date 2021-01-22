import { Model, STRING } from 'sequelize'
import sequelize from './_index'

export class Acc extends Model {}

export class AccModel {
  id: string;
  name: string;
  pwd: string;
  createdAt: Date;
  updatedAt: Date;
}

Acc.init(
  {
    email: STRING(50),
    pwd: STRING(50)
  },
  { 
    sequelize, 
    modelName: 'Acc' 
  }
);
