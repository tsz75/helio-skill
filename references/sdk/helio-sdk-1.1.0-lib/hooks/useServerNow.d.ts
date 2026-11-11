export type UseServerNowResult = Date;
/**
 * Produces the current time on the server, updated every second.
 *
 * Note: Due to platform limitations, the date returned will be a native `Date` object of the
 * exact timestamp but with an arbitrary time zone. The time zone information should be
 * disregarded.
 *
 * @category Hooks
 *
 * @since 1.0.0
 *
 * @example Getting the current server time
 * ```tsx
 * function MyComponent() {
 *   const now = useServerNow();
 *
 *   return <div>{now.toLocaleString()}</div>;
 * }
 * ```
 */
export declare function useServerNow(): UseServerNowResult;
