/**
 * Used to check for compatibility with HELIO during extension load.
 *
 * Only available as a type to ensure it is enforceable at compile time.
 *
 * We cannot check this value at runtime because the SDK code itself is not
 * included in built extensions.
 *
 * @see {@link createLibraryExtension}
 */
export type MinimumRequiredHelioVersion = '26.2.0';
