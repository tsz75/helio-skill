export type UseZoomResult = {
    /**
     * Current zoom factor.
     *
     * Zoom is expressed as a fraction, with `1` representing the default (100%).
     */
    factor: number;
};
/**
 * Provides the current zoom level of the application.
 *
 * Zoom is expressed as a fraction, with `1` representing the default (100%).
 *
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useZoom(): UseZoomResult;
