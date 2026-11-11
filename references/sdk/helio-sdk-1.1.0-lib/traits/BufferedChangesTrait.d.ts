/**
 * Makes an element have the option for buffering changes locally.
 *
 * Elements with this trait will:
 * - Automatically receive options for setting the write mode (direct or
 *   buffered),
 * - apply all Data Variable changes locally and
 * - allow them to be manually committed or discarded (via HELIO Core Actions).
 *
 * The typical use case for this trait is to be used in combination with the {@link PageTrait} to
 * create pages that allow users to make changes and apply them explicitly via a button
 * (Action 'Commit & Write Buffered Changes').
 *
 * Important: In this case, the order of the traits is crucial. The {@link BufferedChangesTrait}
 * must always be listed before the {@link PageTrait}!
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
 *   name: 'My Page With Buffer',
 *   description: 'Page that allows controlling Retro Encabulators',
 *   traits: [traits.BufferedChanges, traits.Page],
 *   propsSchema: createPropsSchema().initial({}),
 *   Component() {
 *     return <div>My Page Content</div>;
 *   },
 * });
 * ```
 *
 * @see {@link PageTrait}
 * @see {@link ControlTrait}
 * @see {@link WidgetTrait}
 * @see {@link traits}
 * @see {@link createElement}
 */
export declare const BufferedChangesTrait: import("../main").RichTraitRef<undefined>;
