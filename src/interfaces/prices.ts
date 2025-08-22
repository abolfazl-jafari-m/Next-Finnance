export interface Prices {
    timestamp: number;
    data: (Coins)[];
}
export interface Coins {
    id: string;
    rank: string;
    symbol: string;
    name: string;
    supply: string;
    maxSupply: string;
    marketCapUsd: string;
    volumeUsd24Hr: string;
    priceUsd: string;
    changePercent24Hr: string;
    vwap24Hr: string;
    explorer: string;
    tokens: Tokens;
}
export interface Tokens {
    additionalProp1?: (string)[] | null;
    additionalProp2?: (string)[] | null;
    additionalProp3?: (string)[] | null;
}
