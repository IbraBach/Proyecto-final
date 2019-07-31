import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {ShoppingCart} from '../models';
import {DsShoppingCartDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShoppingCartRepository extends DefaultKeyValueRepository<
  ShoppingCart
> {
  constructor(
    @inject('datasources.dsShoppingCart') dataSource: DsShoppingCartDataSource,
  ) {
    super(ShoppingCart, dataSource);
  }
}
