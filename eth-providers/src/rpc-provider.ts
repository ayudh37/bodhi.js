import { BaseProvider } from './base-provider';
import { createApi } from './chain-api';

export interface BaseProviderOptions {
  safeMode?: boolean;
  localMode?: boolean;
  maxCacheSize?: number;
  subqlUrl?: string;
  storageCacheSize?: number;
}

const defaultOpts: BaseProviderOptions = {
  safeMode: false,
  localMode: false,
  maxCacheSize: 200,
  subqlUrl: undefined,
  storageCacheSize: 5000
};

export class EvmRpcProvider extends BaseProvider {
  constructor(endpoint: string | string[], opt: BaseProviderOptions = defaultOpts) {
    super({
      safeMode: opt.safeMode,
      localMode: opt.localMode,
      subqlUrl: opt.subqlUrl
    });
    const api = createApi(endpoint);
    this.setApi(api);
    this.startSubscription(opt.maxCacheSize) as unknown as void;
  }

  static from(endpoint: string | string[], opt: BaseProviderOptions = defaultOpts): EvmRpcProvider {
    return new EvmRpcProvider(endpoint, opt);
  }
}
