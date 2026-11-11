import type { ConditionalTypeOptions, PropCondition, SchemaDef, Values } from '../types/schema';
/**
 * @inline
 */
type ObjectOptions<Shape extends SchemaDef> = Omit<ConditionalTypeOptions, 'enabledIf'> & {
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
     * The schema of the properties nested inside this object. Declare it just
     * like a top-level schema, using the same `props.*` helpers.
     *
     * @example
     * ```ts
     * {
     *   x: props.Number({
     *     label: 'X', optional: false, defaultValue: 0
     *   }),
     *   y: props.Number({
     *     label: 'Y', optional: false, defaultValue: 0
     *   }),
     * }
     * ```
     */
    shape: Shape;
};
type ObjectDef<Shape extends SchemaDef> = {
    kind: 'Object';
    label: string;
    fieldType: 'ObjectProperty';
    shape: Shape;
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
 * Optional Object Property
 */
export declare function Object<Shape extends SchemaDef>(options: ObjectOptions<Shape> & {
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional: true;
    /**
     * The default value for this property. When omitted, the property defaults
     * to `undefined` and the object is disabled in the editor until it is
     * enabled explicitly.
     */
    defaultValue?: Values<Shape>;
}): ObjectDef<Shape> & {
    optional: true;
    type: Values<Shape> | undefined;
    defaultValue: Values<Shape> | undefined;
};
/**
 * Non-Optional Object Property
 */
export declare function Object<Shape extends SchemaDef>(options: ObjectOptions<Shape> & {
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional: false;
    /**
     * The default value for this property. When omitted, it is composed from
     * the defaults of the nested props.
     */
    defaultValue?: Values<Shape>;
}): ObjectDef<Shape> & {
    optional: false;
    type: Values<Shape>;
    defaultValue: Values<Shape>;
};
export {};
