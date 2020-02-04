import { getChainId } from "../../helpers/utils";

export interface ILedgerConnectorOptions {
  rpcUrl: string;
  network: string;
}

export interface ILedgerProviderOptions {
  rpcUrl: string;
  chainId: string;
}

const ConnectToLedger = async (
  LedgerProvider: any,
  opts: ILedgerConnectorOptions
) => {
  const providerOpts = {
    chainId:
      opts.network && getChainId(opts.network) ? getChainId(opts.network) : 1,
    rpcUrl: opts.rpcUrl
  };

  const provider = new LedgerProvider(providerOpts);

  await provider.enable();

  return provider;
};

export default ConnectToLedger;
