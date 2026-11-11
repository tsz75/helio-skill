import type { IconRef } from '../types/icon';
import type { ConditionalTypeOptions, EnumEditor, PropCondition } from '../types/schema';
export type EnumOption<V> = {
    value: V;
    label: string;
    icon?: IconRef;
    /**
     * Optional tooltip to explain an option.
     *
     * Only displayed when the {@link EnumEditor | editor} is `button-group`.
     */
    tooltip?: string;
};
export type OptionItem<V> = V | EnumOption<V>;
type OptionValueOf<O extends readonly OptionItem<unknown>[]> = O extends EnumOption<unknown>[] ? O[number]['value'] : O[number];
/**
 * @inline
 */
type EnumOptions<V extends string | number, O extends readonly OptionItem<V>[]> = ConditionalTypeOptions & {
    /**
     * Human-readable label for this property. Will be used to represent this
     * property in the UI.
     */
    label: string;
    /**
     * Optionally display this prop as part of the given prop category.
     */
    propGroup?: string;
    /**
     * An optional description that will be displayed below the property in the
     * editor to help users understand the purpose and available options of this
     * property.
     */
    description?: string;
    /**
     * List of enum options, either as a list of scalar values or as objects.
     *
     * @see {@link EnumOptions}
     *
     * @example
     * Basic Options
     * ```ts
     * ['on', 'off']
     * ```
     *
     * @example
     * Custom Labels
     * ```ts
     * [
     *   { value: 'on', label: 'On' },
     *   { value: 'off', label: 'Off' },
     * ]
     * ```
     *
     * @example
     * With Icons
     * ```ts
     * [
     *   { value: 'on', label: 'On', icon: { name: 'Play' } },
     *   { value: 'off', label: 'Off', icon: { name: 'Stop' } },
     * ]
     * ```
     *
     * @example
     * With Tooltips (only available in `button-group` mode).
     * ```ts
     * [
     *   {
     *     value: 'on',
     *     label: 'On',
     *     tooltip: 'Description for On' },
     *   {
     *     value: 'off',
     *     label: 'Off',
     *     tooltip: 'Description for Off'
     *   },
     * ]
     * ```
     */
    options: O;
    /**
     * Hint for which control the editor uses to display the options. Defaults
     * to buttons for up to three options and a dropdown for more.
     *
     * Option icons are displayed for button groups and dropdowns; option tooltips
     * only for button groups.
     */
    editor?: EnumEditor;
};
type EnumDef<V extends string | number, O extends readonly OptionItem<V>[]> = {
    kind: 'Enum';
    label: string;
    type: OptionValueOf<O>;
    fieldType: 'EnumProperty';
    editor: EnumEditor | undefined;
    options: EnumOption<OptionValueOf<O>>[];
    propCategory: string | undefined;
    slotIcon: undefined;
    createTreeSlot: false;
    allowedTraits: [];
    valueType: undefined;
    description: string | undefined;
    visibleIf: PropCondition | undefined;
    enabledIf: PropCondition | undefined;
};
/**
 * Optional Enum Property
 */
export declare function Enum<V extends string | number, O extends readonly OptionItem<V>[]>(options: EnumOptions<V, O> & {
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional: true;
    /**
     * The default value for this property.
     */
    defaultValue?: OptionValueOf<O>;
}): EnumDef<V, O> & {
    optional: true;
    defaultValue: OptionValueOf<O> | undefined;
};
/**
 * Non-Optional Enum Property
 */
export declare function Enum<V extends string | number, O extends readonly OptionItem<V>[]>(options: EnumOptions<V, O> & {
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional: false;
    /**
     * The default value for this property.
     */
    defaultValue: OptionValueOf<O>;
}): EnumDef<V, O> & {
    optional: false;
    defaultValue: OptionValueOf<O>;
};
export {};
