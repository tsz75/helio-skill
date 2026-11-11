/**
 * Safe wrappers around `Intl` constructors for use within the SDK.
 *
 * Mirrors the approach in the main `helio` package but kept separate because the SDK cannot
 * import from that package.
 */
/**
 * Create an `Intl.NumberFormat` instance. Falls back to the system locale when `locale` is
 * invalid. Re-throws errors caused by invalid options rather than silently swallowing them.
 */
export declare function createNumberFormat(locale: string | undefined, options?: Intl.NumberFormatOptions): Intl.NumberFormat;
