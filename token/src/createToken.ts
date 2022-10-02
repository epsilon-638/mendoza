import * as algosdk from 'algosdk';
import algodclient from './client';

type DaoTokenParams = {
  unitName: string;
  daoName: string;
  address: string;
  manager: string;
  reserve: string;
  freeze: string;
  clawback: string;
  totalIssuance: number;
  decimals: number;
  defaultFrozen: boolean;
  note?: string;
  assetUrl?: string;
  assetMetaDataHash?: string;
}

export default async function createToken({
  untiName,
  daoName,
  address,
  manager,
  reserve,
  freeze,
  clawback,
  totalIssuance,
  decimals,
  defaultFrozen,
  note,
  assetUrl,
  assetMetaDataHash,
}: DaoTokenParams) {
  let params = await algodclient.getTransactionParams().do();

  let txn = algosdk.makeAssetCreateTxnWithSuggestedParams(
    address,
    note,
    totalIssuance,
    decimals,
    defaultFrozen,
    manager,
    reserve,
    freeze,
    clawback,
    unitName,
    daoName,
    assetUrl,
    assetMetaDataHash,
    params,
  );
}
