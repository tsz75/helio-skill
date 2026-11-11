import type { CreateDynamicPropertyOptions, CreateDynamicPropertyResult } from '../types/dynamicProperty';
import type { Namespace } from '../types/namespace';
import type { PropsSchema } from '../types/schema';
/**
 * Creates a HELIO Dynamic Property.
 *
 * Dynamic properties are configurable values that can change dynamically over
 * time and support write operations.
 *
 * Note: New dynamic properties need to be added to the extension's library
 * (see {@link createLibraryExtension}) to become active in HELIO.
 *
 * @category Functions
 *
 * @since 1.0.0
 *
 * @example
 * Create a new dynamic property
 * ```tsx
 * const property = createDynamicProperty(namespace, {
 *   name: 'Basic Property',
 *   propsSchema: createPropsSchema().initial({}),
 *   writable: false,
 *   valueTypes: ['NumericValue'],
 *
 *   useDynamicProperty(_props) {
 *     return {
 *       valueType: values.Number(),
 *       value: 123,
 *       displayValue: '123',
 *       canRead: true,
 *       canWrite: false,
 *     };
 *   },
 * });
 * ```
 *
 * @see {@link createNamespace}
 */
export declare function createDynamicProperty<Schema extends PropsSchema>(
/**
 * Namespace for uniquely addressing this dynamic property.
 *
 * @see {@link createNamespace}
 */
namespace: Namespace, options: CreateDynamicPropertyOptions<Schema>): CreateDynamicPropertyResult<Schema>;
