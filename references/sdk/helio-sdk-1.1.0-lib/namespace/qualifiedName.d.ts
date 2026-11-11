import type { Namespace } from '../types/namespace';
/**
 * Returns a qualified name within the given namespace.
 *
 * Can be used to create keys for {@link useServerState} and other contexts where you need to
 * guarantee names are unique within a project.
 *
 * @category Namespaces
 *
 * @since 1.0.0
 *
 * @example Basic
 */
export declare function qualifiedName(namespace: Namespace, id: string): string;
