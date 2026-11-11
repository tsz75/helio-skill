type WidgetTraitConfigV1 = {
    hasLabel: boolean;
    hasIcon: boolean;
    hasDescription: boolean;
    hasAction: boolean;
};
export type WidgetTraitConfig = WidgetTraitConfigV1;
/**
 * Makes an element appear and behave as a HELIO Widget.
 *
 * Elements with this trait will:
 * - be made available as elements that can be added to Dashboard Pages,
 * - automatically receive editable props like Title and Icon,
 * - render with the correct widget wrapper and
 * - be selectable in the HELIO IDE.
 *
 * @category Traits
 *
 * @since 1.0.0
 *
 * @example
 * Example Usage
 * ```tsx
 * const ns = createNamespace({ name: 'com.my-company' });
 * const element = createElement(ns, {
 *   name: 'My Custom Widget',
 *   description: 'Widget that allows controlling Retro Encabulators',
 *   traits: [traits.Widget],
 *   propsSchema: createPropsSchema().initial({}),
 *   Component() {
 *     return <div>My Widget Content</div>;
 *   },
 * });
 * ```
 *
 * @see {@link PageTrait}
 * @see {@link ControlTrait}
 * @see {@link traits}
 * @see {@link createElement}
 */
export declare const WidgetTrait: import("../types/trait").RichTrait<WidgetTraitConfigV1>;
export {};
