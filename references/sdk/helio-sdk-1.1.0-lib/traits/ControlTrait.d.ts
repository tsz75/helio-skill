type ControlTraitConfigV1 = {
    hasLabel: boolean;
    hasIcon: boolean;
    hasDescription: boolean;
    hasAction: boolean;
};
export type ControlTraitConfig = ControlTraitConfigV1;
/**
 * Makes an element appear and behave as a HELIO Control.
 *
 * Elements with this trait will:
 * - be made available as controls that can be added to Dashboard and Parameter Pages,
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
 *   name: 'My Custom Control',
 *   description: 'Control that allows controlling Retro Encabulators',
 *   traits: [traits.Control],
 *   propsSchema: createPropsSchema().initial({}),
 *   Component() {
 *     return <div>My Control Content</div>;
 *   },
 * });
 * ```
 *
 * @see {@link PageTrait}
 * @see {@link WidgetTrait}
 * @see {@link traits}
 * @see {@link createElement}
 */
export declare const ControlTrait: import("../types/trait").RichTrait<ControlTraitConfigV1>;
export {};
