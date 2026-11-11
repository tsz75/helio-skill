import type { CreateActionOptions, CreateActionResult } from '../types/action';
import type { Namespace } from '../types/namespace';
import type { PropsSchema } from '../types/schema';
/**
 * Creates a HELIO Action.
 *
 * Actions can perform side effects on user actions.
 *
 * Note: New actions need to be added to the extension's library
 * (see {@link createLibraryExtension}) to become active in HELIO.
 *
 * @category Functions
 *
 * @since 1.0.0
 *
 * @see {@link createNamespace}
 */
export declare function createAction<Schema extends PropsSchema>(namespace: Namespace, options: CreateActionOptions<Schema>): CreateActionResult<Schema>;
