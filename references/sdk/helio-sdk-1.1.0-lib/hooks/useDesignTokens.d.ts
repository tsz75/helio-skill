import type { DesignTokens } from '../types/designTokens';
/**
 * Returns all Design Tokens as a single object.
 *
 * @category Hooks
 *
 * @since 1.1.0
 *
 * @example
 * Basic Usage
 * ```tsx
 * function MyComponent() {
 *   const designTokens = useDesignTokens();
 *
 *   return (
 *     <div style={{ backgroundColor: designTokens.controlsPrimaryBackground }}>Design Tokens</div>
 *   );
 * }
 * ```
 */
export declare function useDesignTokens(): DesignTokens;
