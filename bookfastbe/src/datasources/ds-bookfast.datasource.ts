import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './ds-bookfast.datasource.json';

export class DsBookfastDataSource extends juggler.DataSource {
  static dataSourceName = 'dsBookfast';

  constructor(
    @inject('datasources.config.dsBookfast', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
