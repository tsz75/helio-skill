type PageTraitConfigV1 = {
    hasPageReference: boolean;
    hasHeader: boolean;
};
export type PageTraitConfig = PageTraitConfigV1;
/**
 * Makes an element appear and behave as a HELIO Page.
 *
 * Elements with this trait will:
 * - be made available as elements that can be added to an HMI, Page Groups and Tab Groups,
 * - automatically receive editable props like Title and Icon,
 * - render with the correct page wrapper,
 * - be made available in menus and
 * - be selectable in the HELIO IDE.
 *
 * This trait can usefully be combined with {@link BufferedChangesTrait} to create pages
 * that allow users to make changes and apply them explicitly via a button.
 * See the documentation of {@link BufferedChangesTrait} for details and an example.
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
 *   name: 'My Custom Page',
 *   description: 'Page that allows controlling Retro Encabulators',
 *   traits: [traits.Page],
 *   propsSchema: createPropsSchema().initial({}),
 *   Component() {
 *     return <div>My Page Content</div>;
 *   },
 * });
 * ```
 *
 * @see {@link WidgetTrait}
 * @see {@link ControlTrait}
 * @see {@link traits}
 * @see {@link createElement}
 */
export declare const PageTrait: import("../types/trait").RichTrait<PageTraitConfigV1>;
export {};
