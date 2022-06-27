import { expect } from 'chai';
import { EvmRpcProvider } from '../../rpc-provider';
import dotenv from 'dotenv';
import { sleep } from '../../utils';

dotenv.config();

const endpoint = process.env.ENDPOINT_URL || 'ws://127.0.0.1:9944';

describe('EvmRpcProvider', () => {
  before('wait for mandala node to start', async () => {
    const START_DELAY = process.env.START_DELAY || 0;
    console.log(`waiting ${START_DELAY}ms ...`);

    await sleep(START_DELAY);
  });

  it('connect chain', async () => {
    const provider = EvmRpcProvider.from(endpoint);
    await provider.isReady();
    expect(provider.isConnected).to.be.true;
    await provider.disconnect();
  });

  it('connect random', async () => {
    try {
      const provider = EvmRpcProvider.from('ws://192.-');
      await provider.isReady();
    } catch (e) {
      expect((e as any).type).to.equal('error');
    }
  });

  // it('getBlockTag', async () => {
  //   const provider = EvmRpcProvider.from(endpoint);
  //   await provider.isReady();
  //   const blockHash = await provider._getBlockTag('0x123');

  //   expect(blockHash.length).to.equal(66);
  // });
});
