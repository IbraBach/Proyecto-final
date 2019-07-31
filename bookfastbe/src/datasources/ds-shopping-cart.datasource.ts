import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ds-shopping-cart.datasource.json';

export class DsShoppingCartDataSource extends juggler.DataSource {
  static dataSourceName = 'dsShoppingCart';

  constructor(
    @inject('datasources.config.dsShoppingCart', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
