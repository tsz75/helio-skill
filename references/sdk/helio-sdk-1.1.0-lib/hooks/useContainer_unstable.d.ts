/**
 * The resolved visual appearance of the surface the element's content
 * currently sits on — the visible surrounding container.
 *
 * These are ready-to-use CSS values you can apply selectively (e.g. as a
 * `background` here, a text `color` there) so your element blends in with the
 * surrounding container. They are *not* a spreadable `style` object — apply the
 * individual values where they belong.
 *
 * @category Hooks
 */
export type ContainerAppearance = {
    /**
     * The background the content sits on. Already accounts for the container's
     * level and status.
     */
    background: string;
    /**
     * The primary text color for content on this surface.
     */
    color: string;
    /**
     * A subtler, lower-emphasis text color for secondary content.
     */
    colorSubtle: string;
};
/**
 * The layer the surrounding container is rendered in.
 *
 * - `base` is the normal layer the UI is rendered in.
 * - `overlay` is a floating layer stacked above the base, e.g. a dialog.
 *
 * @category Hooks
 */
export type ContainerLayer = 'base' | 'overlay';
/**
 * @category Hooks
 */
export type UseContainerResult = {
    /**
     * The resolved visual appearance of the surrounding container. Use this to
     * make your element blend in with its surroundings.
     */
    appearance: ContainerAppearance;
    /**
     * The layer the surrounding container is rendered in, e.g. to behave
     * differently when placed inside an overlay.
     */
    layer: ContainerLayer;
    /**
     * The visual nesting depth of the surrounding container, where `0` is the
     * top level and the number increases with nesting.
     *
     * Prefer {@link ContainerAppearance} to match the look of the surroundings.
     * Only reach for `level` when a rule genuinely depends on the nesting depth
     * itself (e.g. a customer style guide that overrides a value at a specific
     * depth) — keying behavior on it makes your element depend on where it is
     * placed.
     */
    level: number;
};
/**
 * Describes the surrounding container the element's content sits on — the
 * visible container — so the content can blend in with, or deliberately
 * react to, its surroundings.
 *
 * @experimental Might be removed in future versions or change behavior.
 *
 * @category Hooks
 *
 * @example
 * Blend content in with the surrounding container
 * ```tsx
 * function MyComponent() {
 *   const { appearance } = useContainer_unstable();
 *
 *   return <span style={{ color: appearance.colorSubtle }}>Secondary</span>;
 * }
 * ```
 */
export declare function useContainer_unstable(): UseContainerResult;
