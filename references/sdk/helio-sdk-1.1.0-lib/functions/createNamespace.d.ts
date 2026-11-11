import type { Namespace } from '../types/namespace';
type CreateNamespaceOptions = {
    name: string;
};
/**
 * Creates a namespace for library extension.
 *
 * Namespaces aim to ensure that all names given to elements, etc. within
 * extensions are globally unique within a HELIO project. The namespace must be
 * provided in [reverse domain name
 * notation](https://en.wikipedia.org/wiki/Reverse_domain_name_notation) (e.g. `com.my-company`)
 * and can include additional segments (e.g. `helio.trend-controls`).
 *
 * @summary Creates a namespace for library extension.
 *
 * @category Namespaces
 *
 * @since 1.0.0
 *
 * @example
 * ```ts
 * const namespace = createNamespace({
 *   name: 'com.my-company.helio.trend-controls'
 * });
 * ```
 */
export declare function createNamespace(options: CreateNamespaceOptions): Namespace;
export {};
