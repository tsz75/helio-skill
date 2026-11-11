export type UseTimeResult = {
    /**
     * The current `Date` on the server.
     * Note: Due to platform limitations, the date returned will be a native `Date` object of the
     * exact timestamp but with an arbitrary time zone. The time zone information should be
     * disregarded.
     */
    serverNow(): Date;
};
/**
 * Allows access to time information.
 *
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useTime(): UseTimeResult;
