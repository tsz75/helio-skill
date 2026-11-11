/**
 * @category Traits
 *
 * @since 1.0.0
 *
 */
export declare const traits: {
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
     * @see {@link PageTrait}
     */
    Page: import("../types/trait").RichTrait<{
        hasPageReference: boolean;
        hasHeader: boolean;
    }>;
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
     * @see {@link WidgetTrait}
     */
    Widget: import("../types/trait").RichTrait<{
        hasLabel: boolean;
        hasIcon: boolean;
        hasDescription: boolean;
        hasAction: boolean;
    }>;
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
     * @see {@link ControlTrait}
     */
    Control: import("../types/trait").RichTrait<{
        hasLabel: boolean;
        hasIcon: boolean;
        hasDescription: boolean;
        hasAction: boolean;
    }>;
    /**
     * Makes an element have the option for buffering changes locally.
     *
     * Elements with this trait will:
     * - Automatically receive options for setting the write mode (direct or
     *   buffered),
     * - apply all Data Variable changes locally and
     * - allow them to be manually committed or discarded.
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
     * @see {@link BufferedChangesTrait}
     */
    BufferedChanges: import("../main").RichTraitRef<undefined>;
};
