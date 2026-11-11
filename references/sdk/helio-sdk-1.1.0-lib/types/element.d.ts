import type { CreateTextsResult } from '../functions/createTexts';
import type { IconRef } from './icon';
import type { InstanceRefSchema } from './instance';
import type { Namespace } from './namespace';
import type { CurrentSchemaValues, PropsSchema, SchemaDef } from './schema';
import type { TextsDef } from './texts';
import type { TraitRef } from './trait';
export type PropsCategory = {
    /**
     * Human-readable label for the category that will be displayed in the IDE.
     */
    label: string;
    /**
     * Optional hint if the group should appear closed by default.
     *
     * This only affects the initial state, as opened and closed groups remain
     * persistent for each user.
     */
    defaultClosed?: boolean;
};
export type ClassPropsOf<Schema extends PropsSchema<any> = PropsSchema<any>> = CurrentSchemaValues<Schema>;
export type ElementFactory = {
    createInstance<Schema extends PropsSchema<SchemaDef>, Texts extends TextsDef>(element: CreateElementResult<Schema, Texts>, props: Partial<CurrentSchemaValues<Schema>>): InstanceRefSchema;
};
type DefaultElementPropsCallback<Schema extends PropsSchema> = (factory: ElementFactory) => Partial<CurrentSchemaValues<Schema>>;
export type DefaultElementProps<Schema extends PropsSchema> = Partial<CurrentSchemaValues<Schema>> | DefaultElementPropsCallback<Schema>;
/**
 * @inline
 */
export type CreateElementOptions<Schema extends PropsSchema<SchemaDef> = PropsSchema, Texts extends TextsDef = TextsDef> = {
    /**
     * Optional icon to identify this element in the HELIO IDE
     *
     * @example
     * ```
     * { name: 'Dinosaur' }
     * ```
     */
    icon?: IconRef;
    /**
     * Optional category for grouping this element in the HELIO IDE, such as in the
     * Add Element dialog.
     */
    category?: string;
    /**
     * Human-readable name of the element as it will appear in the HELIO IDE.
     *
     * Note: If no explicit `id` is provided, this value will also be used to create a unique id for
     * the element.
     *
     * **Changing the name in an extension update will break element references in
     * existing projects.**
     *
     * If you need to change the name, make sure to provide an `id` with the old name to ensure
     * a smooth migration.
     *
     * @example
     * Migrating element name.
     * ```tsx
     * {
     *   name: 'New Element Name',
     *   id: 'Old Element Name',
     *   // ...other `createElement` options...
     * }
     * ```
     */
    name: string;
    /**
     * Internal ID of the element. This uniquely identifies the element within the extension and
     * should never change. If this property is omitted, the element will be referenced by its `name`.
     */
    id?: string;
    /**
     * Description of this element that will appear in the IDE.
     */
    description?: string;
    /**
     * Element traits
     *
     * Traits control where an element can be used in the application and what properties it has.
     * HELIO provides some standard {@link traits} that allow your elements to extend different
     * parts of the library.
     *
     * - If you want to add a new page type, use {@link traits.Page}.
     * - If you want to add a new dashboard widget type, use {@link traits.Widget}.
     * - If you want to add a new control type, use {@link traits.Control}.
     *
     * @see {@link traits}
     * @see {@link createBasicTrait}
     */
    traits: Array<string | TraitRef>;
    /**
     * Translation texts used in this element
     *
     * @see {@link createTexts}
     */
    texts?: CreateTextsResult<Texts>;
    /**
     * Schema containing the properties this element accepts, created using the
     * {@link createPropsSchema} function.
     */
    propsSchema: Schema;
    /**
     * Optional configuration to group entries in `propsSchema` into different
     * property groups in the IDE.
     *
     * @see {@link https://docs.helio-hmi.com/docs/reference/ide/project-editor/content-view/properties-panel/|Properties Panel}
     */
    propsGroups?: Record<string, PropsCategory>;
    /**
     * Optional callback for creating default props.
     *
     * Can be used to instantiate other elements as children.
     */
    defaultProps?: DefaultElementPropsCallback<Schema>;
    /** React component used to display this element. */
    Component: React.ComponentType<ClassPropsOf<Schema>>;
};
export type CreateElementResult<Schema extends PropsSchema, Texts extends TextsDef = TextsDef> = {
    namespace: Namespace;
    /**
     * Internal ID of the element. This uniquely identifies the element within the
     * extension and should never change. If this property is omitted, the element
     * will be referenced by its `name`.
     */
    id?: string;
    /**
     * Human-readable name of the element as it will appear in the HELIO IDE.
     *
     * Note: If no explicit `id` is provided, this value will also be used to
     * create a unique id for the element.
     *
     * **Changing the name in an extension update will break element references in
     * existing projects.**
     *
     * If you need to change the name, make sure to provide an `id` with the old
     * name to ensure a smooth migration.
     *
     * @example Migrating element name.
     * ```tsx
     * {
     *   name: 'New Element Name',
     *   id: 'Old Element Name',
     *   // ...other `createElement` options...
     * }
     * ```
     */
    name: string;
    /**
     * Optional category for grouping this element in the HELIO IDE, such as in
     * the Add Element dialog.
     */
    category?: string;
    /**
     * Description of this element that will appear in the IDE
     */
    description?: string;
    /**
     * Optional icon to identify this element in the HELIO IDE
     *
     * @example
     * ```
     * { name: 'Dinosaur' }
     * ```
     */
    icon?: IconRef;
    /**
     * Element traits
     *
     * Traits control where an element can be used in the application and what
     * properties it has. HELIO provides some standard {@link traits} that allow
     * your elements to extend different parts of the library.
     *
     * - If you want to add a new page type, use {@link traits.Page}.
     * - If you want to add a new dashboard widget type, use {@link traits.Widget}.
     * - If you want to add a new control type, use {@link traits.Control}.
     *
     * @see {@link traits}
     * @see {@link createBasicTrait}
     */
    traits: Array<string | TraitRef>;
    /**
     * Translation texts used in this element
     *
     * @see {@link createTexts}
     */
    texts?: CreateTextsResult<Texts>;
    /**
     * Schema containing the properties this element accepts, created using the
     * {@link createPropsSchema} function.
     */
    propsSchema: Schema;
    /**
     * Optional configuration to group entries in `propsSchema` into different
     * property groups in the IDE.
     *
     * @see {@link https://docs.helio-hmi.com/docs/reference/ide/project-editor/content-view/properties-panel/|Properties Panel}
     */
    propsGroups?: Record<string, PropsCategory>;
    /** React component used to display this element. */
    Component: React.ComponentType<ClassPropsOf<Schema>>;
    /**
     * Optional callback for creating default props.
     *
     * Can be used to instantiate other elements as children.
     */
    defaultProps: DefaultElementProps<Schema>;
};
export {};
