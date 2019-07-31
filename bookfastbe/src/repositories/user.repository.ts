import { DefaultCrudRepository } from '@loopback/repository';
import { User, UserRelations } from '../models';
import { DsBookfastDataSource } from '../datasources';
import { inject } from '@loopback/core';

export type Credentials = {
  email: string;
  password: string;
};

export class UserRepository extends DefaultCrudRepository<User,typeof User.prototype.userId,UserRelations> {
  
  constructor(
    @inject('datasources.dsBookfast') dataSource: DsBookfastDataSource,
  ) {
    super(User, dataSource);
  }
}
