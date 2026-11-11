/**
 * Returns the currently active application locale.
 *
 * Note that most HELIO components are already locale-aware and will automatically use the
 * locale the user has selected.
 *
 * @category Hooks
 *
 * @since 1.0.0
 *
 * @example Create a Custom Formatter
 * ```tsx
 * // Read locale
 * const locale = useLocale(); // 'en-GB'
 *
 * // Construct a number formatter with the correct locale
 * const formatter = new Intl.NumberFormat(locale);
 * ```
 */
export declare function useLocale(): string;
