/**
 * The mode in which the application is currently displaying.
 *
 * @category Hooks
 */
export type RenderMode = 
/**
 * Rendering in the Editor Preview while the Edit mode is activated
 */
'PreviewEdit'
/**
 * Rendering in the Editor Preview while the Test mode is activated
 */
 | 'PreviewTest'
/**
 * Rendering in the Runtime
 */
 | 'Runtime';
/**
 * Returns the current mode in which the application is rendering.
 *
 * Can be one of:
 *   - **PreviewEdit**: Rendering in the Editor Preview while the Edit mode is activated
 *   - **PreviewTest**: Rendering in the Editor Preview while the Test mode is activated
 *   - **Runtime**: Rendering in the Runtime
 *
 *  @category Hooks
 *
 *  @since 1.0.0
 */
export declare function useRenderMode(): RenderMode;
