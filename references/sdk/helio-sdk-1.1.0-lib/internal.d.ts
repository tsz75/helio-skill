/**
 * Internal entry point for the HELIO host application (SDK bridge).
 *
 * Everything exported here is intentionally absent from the public SDK API in `main.ts`.
 * Extensions must not import from this module — it may change without notice.
 */
export { DefaultDesignTokens } from './designSystem/tokens';
