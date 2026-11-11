import type { ConditionalTypeOptions, PropCondition, SchemaDef } from '../types/schema';
/**
 * Prop definitions that can be used as list items.
 *
 * Items must be non-optional so that newly added items always carry an
 * editable value. `Children` is excluded since tree slots are only created
 * for top-level props.
 */
type ListItemDef = SchemaDef[string] & {
    optional: false;
    kind: 'String' | 'Number' | 'Boolean' | 'Enum' | 'DynamicProperty' | 'Action' | 'File' | 'Object' | 'List';
};
/**
 * @inline
 */
type ListOptions<Item extends ListItemDef> = Omit<ConditionalTypeOptions, 'enabledIf'> & {
    /**
     * Human-readable label for this property. Will be used to represent this
     * property in the UI.
     */
    label: string;
    /**
     * An optional description that will be displayed below the property in the
     * editor to help users understand the purpose of this property.
     */
    description?: string;
    /**
     * The prop definition of the items in this list. Declare it using the same
     * `props.*` helpers as in a schema, with any type except `props.Children`.
     * Item definitions must use `optional: false` so that newly added items
     * always carry an editable value.
     *
     * The item's `label` is used to identify items in the editor (e.g. as
     * "Point #1") when the item value cannot represent itself.
     *
     * @example
     * ```ts
     * props.Object({
     *   label: 'Point',
     *   optional: false,
     *   shape: {
     *     x: props.Number({
     *       label: 'X', optional: false, defaultValue: 0
     *     }),
     *     y: props.Number({
     *       label: 'Y', optional: false, defaultValue: 0
     *     }),
     *   },
     * })
     * ```
     */
    item: Item;
};
type ListDef<Item extends ListItemDef> = {
    kind: 'List';
    label: string;
    fieldType: 'ListProperty';
    item: Item;
    options: undefined;
    propCategory: string | undefined;
    slotIcon: undefined;
    createTreeSlot: false;
    allowedTraits: [];
    valueType: undefined;
    description: string | undefined;
    visibleIf: PropCondition | undefined;
    enabledIf: undefined;
};
/**
 * Optional List Property
 */
export declare function List<Item extends ListItemDef>(options: ListOptions<Item> & {
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional: true;
    /**
     * The default value for this property. When omitted, the property defaults
     * to `undefined` and the list is disabled in the editor until it is
     * enabled explicitly.
     */
    defaultValue?: Array<Item['type']>;
}): ListDef<Item> & {
    optional: true;
    type: Array<Item['type']> | undefined;
    defaultValue: Array<Item['type']> | undefined;
};
/**
 * Non-Optional List Property
 */
export declare function List<Item extends ListItemDef>(options: ListOptions<Item> & {
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional: false;
    /**
     * The default value for this property. When omitted, the list defaults to
     * an empty array.
     */
    defaultValue?: Array<Item['type']>;
}): ListDef<Item> & {
    optional: false;
    type: Array<Item['type']>;
    defaultValue: Array<Item['type']>;
    enabledIf: undefined;
};
export {};
