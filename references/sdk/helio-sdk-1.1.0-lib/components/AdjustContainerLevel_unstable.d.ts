import type { ReactNode } from 'react';
export type AdjustContainerLevelProps = {
    /**
     * Shift the container nesting level of the children, relative to the level the
     * component is rendered in.
     *
     * - `1` renders the children one level deeper (as if nested in another container).
     * - `-1` renders them one level shallower, e.g. to counteract an automatic nesting.
     * - `0` is a no-op.
     *
     * Note: Once the highest container nesting level is reached, attempting
     * to increase the level further will have no effect.
     */
    by: number;
    children?: ReactNode;
};
/**
 * Changes the container nesting depth for rendered child elements.
 *
 * Container traits (`traits.Page`, `traits.Widget`, `traits.Control`)
 * automatically increase the container nesting depth. In some rare
 * cases you might want to make manual adjustments like skipping a
 * nesting level to receive the best appearance for child elements.
 *
 * @experimental Might be removed in future versions or change behavior.
 *
 * @category Components
 *
 * @example Render controls one level deeper than the extension itself
 * ```tsx
 * <AdjustContainerLevel_unstable by={1}>
 *   {children}
 * </AdjustContainerLevel_unstable>
 * ```
 */
export declare function AdjustContainerLevel_unstable(props: AdjustContainerLevelProps): ReactNode;
