type Token = string;
/**
 * @internal API and behavior might change at any point.
 */
export declare function useTokens_unstable<Tokens extends object = Record<Token, any>>(tokenSet?: Tokens): Tokens;
export {};
