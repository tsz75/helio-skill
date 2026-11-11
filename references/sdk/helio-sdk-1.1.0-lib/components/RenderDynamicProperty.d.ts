import { type ReactNode } from 'react';
import type { DisplayDynamicPropertyRef, RenderDynamicPropertyChildrenFunction } from '../types/dynamicProperty';
/**
 * @inline
 */
export type RenderDynamicPropertyProps = {
    value: DisplayDynamicPropertyRef | undefined;
    children?: RenderDynamicPropertyChildrenFunction;
};
/**
 * Displays a given {@link DisplayDynamicPropertyRef}.
 *
 * Will resolve the {@link DisplayDynamicPropertyRef} and display it in a human-readable format.
 * For Data Variables this includes appropriate locale-aware formatting and unit display.
 *
 * Display will automatically update when any underlying values change.
 *
 * If you need access to a dynamic property's value or metadata, use {@link useDynamicProperty}
 * instead.
 *
 * @category Components
 *
 * @see {@link useDynamicProperty}
 *
 * @example Basic Usage
 * ```tsx
 * function MyElement(props) {
 *   return (
 *     <div>
 *       Current Value: <RenderDynamicProperty value={props.value} />
 *     </div>
 *   );
 * }
 * ```
 *
 * @since 1.0.0
 */
export declare function RenderDynamicProperty(props: RenderDynamicPropertyProps): ReactNode;
