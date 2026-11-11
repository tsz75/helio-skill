import type { DisplayDynamicPropertyRef, UseHookDynamicPropertyResult } from '../types/dynamicProperty';
import type { MetaType } from '../types/meta';
import type { ValueType } from '../types/values';
export type UseDynamicPropertyOptions<V extends ValueType, M extends MetaType> = {
    valueType?: V;
    metaType?: M;
};
/**
 * Prepares an {@link DynamicPropertyRef} for usage.
 *
 * @see {@link RenderDynamicProperty}
 *
 * @category Hooks
 *
 * @since 1.0.0
 */
export declare function useDynamicProperty<V extends ValueType, M extends MetaType>(dynamicPropertyRef: DisplayDynamicPropertyRef | undefined, options?: UseDynamicPropertyOptions<V, M>): UseHookDynamicPropertyResult<V, M>;
