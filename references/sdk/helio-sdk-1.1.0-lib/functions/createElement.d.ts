import type { CreateElementOptions, CreateElementResult } from '../types/element';
import type { Namespace } from '../types/namespace';
import type { PropsSchema } from '../types/schema';
/**
 * Creates a HELIO element.
 *
 * Note: New elements need to be added to the extension's library
 * (see {@link createLibraryExtension}) to become active in HELIO.
 *
 * @category Functions
 *
 * @since 1.0.0
 *
 * @example
 * Create a new element
 * ```tsx
 * const ns = createNamespace({ name: 'com.my-company' });
 * const element = createElement(ns, {
 *   name: 'My Control',
 *   description: 'Allows controlling Retro Encabulators',
 *   traits: [traits.Control],
 *   propsSchema: createPropsSchema().initial({}),
 *   Component() {
 *     return <div>My Control</div>;
 *   },
 * });
 * ```
 *
 * @see {@link createNamespace}
 */
export declare function createElement<Schema extends PropsSchema = PropsSchema>(
/**
 * Namespace for uniquely addressing this element.
 *
 * @see {@link createNamespace}
 */
namespace: Namespace, options: CreateElementOptions<Schema>): CreateElementResult<Schema>;
