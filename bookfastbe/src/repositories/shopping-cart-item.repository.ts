import {DefaultKeyValueRepository, juggler} from '@loopback/repository';
import {ShoppingCartItem} from '../models';
import {DsShoppingCartDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ShoppingCartItemRepository extends DefaultKeyValueRepository<
  ShoppingCartItem
> {
  constructor(
    @inject('datasources.dsShoppingCart') dataSource: DsShoppingCartDataSource,
  ) {
    super(ShoppingCartItem, dataSource);
  }
}
