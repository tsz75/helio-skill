export type UseRawExternalAttributesResult = Record<string, unknown>;
/**
 * Low-level API to read external attributes passed to the application.
 *
 * This only contains data if HELIO is running as a Web Component.
 *
 * The exact shape of this object should be considered unstable and can
 * change between versions of HELIO or based on application requirements.
 *
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useRawExternalAttributes(): UseRawExternalAttributesResult;
