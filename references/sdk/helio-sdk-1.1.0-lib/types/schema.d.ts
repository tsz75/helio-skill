import type { PropertyType } from '../schema/propHelpers';
import type { HelioChildren, HelioNumber, HelioType, ValueOf } from '../schema/schema';
import type { IconRef } from './icon';
import type { TraitRef } from './trait';
export type SchemaDef = {
    [K: string]: PropDescription<HelioType, TypeOptions<PropertyType>>;
};
export type PropOption<T> = {
    label: string;
    value: T;
    icon?: IconRef;
    tooltip?: string;
};
/**
 * Hint for which control the editor uses to display enum options.
 */
export type EnumEditor = 'button-group' | 'dropdown';
/**
 * Condition on a sibling prop of the same schema level, used by `visibleIf`
 * and `enabledIf`. The condition matches while the sibling prop's value equals
 * `equals` (or is contained in `oneOf`); `notEquals` and `notOneOf` are the
 * negated counterparts.
 */
export type PropCondition = {
    type: 'equals';
    prop: string;
    value: string | number | boolean | undefined;
} | {
    type: 'notEquals';
    prop: string;
    value: string | number | boolean | undefined;
} | {
    type: 'oneOf';
    prop: string;
    values: ReadonlyArray<string | number>;
} | {
    type: 'notOneOf';
    prop: string;
    values: ReadonlyArray<string | number>;
};
type BasePropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = {
    kind: T['kind'];
    type: O['optional'] extends true ? T['value'] | undefined : T['value'];
    label: string;
    optional: O['optional'];
    options: undefined | PropOption<string | number>[];
    defaultValue: 'defaultValue' extends keyof O ? O['defaultValue'] : undefined;
    createTreeSlot: boolean;
    propCategory: string | undefined;
    allowedTraits: Array<string | TraitRef>;
    slotIcon: IconRef | undefined;
    /**
     * Filter for specific types of values in dynamic property refs. Declared as
     * a single type or a list of accepted types; normalized to a list here.
     */
    valueType: PropertyValueType[] | undefined;
    /** Optional description shown below the property in the editor */
    description: string | undefined;
    /** Only display this prop in the editor while the condition matches */
    visibleIf: PropCondition | undefined;
    /** Only allow editing this prop while the condition matches */
    enabledIf: PropCondition | undefined;
};
type CommonPropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = BasePropDescription<T, O> & {
    fieldType: 'DynamicProperty' | 'ActionProperty' | 'SwitchProperty' | 'FileUploadProperty' | 'None';
};
type EnumPropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = BasePropDescription<T, O> & {
    fieldType: 'EnumProperty';
    /**
     * Hint for which control the editor uses to display the options.
     */
    editor: EnumEditor | undefined;
};
type StringPropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = BasePropDescription<T, O> & {
    fieldType: 'TextProperty';
    multiline: boolean;
};
type NumericPropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = BasePropDescription<T, O> & {
    fieldType: 'NumericProperty';
    minValue: number | undefined;
    maxValue: number | undefined;
    unit: string | undefined;
};
type ObjectPropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = BasePropDescription<T, O> & {
    fieldType: 'ObjectProperty';
    /**
     * The schema of the properties nested inside this object.
     */
    shape: SchemaDef;
};
type ListPropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = BasePropDescription<T, O> & {
    fieldType: 'ListProperty';
    /**
     * The prop definition of the items in this list.
     */
    item: PropDescription<HelioType, TypeOptions<PropertyType>>;
};
export type PropDescription<T extends HelioType, O extends TypeOptions<PropertyType>> = CommonPropDescription<T, O> | EnumPropDescription<T, O> | NumericPropDescription<T, O> | StringPropDescription<T, O> | ObjectPropDescription<T, O> | ListPropDescription<T, O>;
export type Values<T extends SchemaDef> = {
    [key in keyof T]: T[key]['type'];
};
export type MigrationFn<From extends SchemaDef, To extends SchemaDef> = (prevProps: Values<From>) => Values<To>;
export type Migration = {
    schema: SchemaDef;
    migrate: MigrationFn<any, any>;
};
export type PropsSchema<BaseSchema extends SchemaDef = SchemaDef> = {
    current: BaseSchema;
    migrations: ReadonlyArray<Migration>;
    migrate<ToSchema extends SchemaDef>(nextSchema: ToSchema, migrationFn: MigrationFn<BaseSchema, ToSchema>): PropsSchema<ToSchema>;
};
/**
 * Conditional visibility and enablement options shared by most prop types. The
 * conditions reference a sibling prop of the same schema level.
 */
export type ConditionalTypeOptions = {
    /**
     * Only display this prop in the editor while the referenced sibling prop
     * matches the condition. The prop keeps its value while it is hidden.
     */
    visibleIf?: PropCondition;
    /**
     * Only allow editing this prop while the referenced sibling prop matches
     * the condition. The prop is displayed grayed out otherwise.
     */
    enabledIf?: PropCondition;
};
export type BaseTypeOptions = ConditionalTypeOptions & {
    /**
     * Human-readable label for this property. Will be used to represent this
     * property in the UI.
     */
    label: string;
    /**
     * Mark this as an optional value that can also take the value `undefined`.
     */
    optional?: boolean;
    /**
     * The default value for this property.
     */
    defaultValue?: unknown;
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
};
export type CurrentSchema<T extends PropsSchema<any>> = T['current'];
export type CurrentSchemaValues<T extends PropsSchema<any>> = Values<T['current']>;
export type PropertyValueType = 'Icon' | 'Color' | 'Image' | 'StatusColor' | 'DistinguishingColor' | 'Integer' | 'Float' | 'String' | 'Boolean' | 'Date' | 'DateTime' | 'Time' | 'Duration' | 'SignalingStatus' | 'Video' | 'Array' | 'PrimitiveValue' | 'NumericValue' | '*'
/**
 * @deprecated Will be removed in a future release
 */
 | 'ServiceData';
export type OptionalTypeOptions<T extends PropertyType> = BaseTypeOptions & {
    optional: true;
    defaultValue?: ValueOf<T> | undefined;
};
export type RequiredTypeOptions<T extends PropertyType> = BaseTypeOptions & {
    optional: false;
    defaultValue: ValueOf<T>;
};
export type TypeOptions<T extends PropertyType> = OptionalTypeOptions<T> | RequiredTypeOptions<T>;
export type OptionalDynamicPropertyTypeOptions<T extends PropertyType> = OptionalTypeOptions<T> & {
    /**
     * The type of values the dynamic property on this prop is expected to
     * produce. Accepts a single type or a list of accepted types.
     */
    valueType: PropertyValueType | readonly PropertyValueType[];
};
export type RequiredDynamicPropertyTypeOptions<T extends PropertyType> = RequiredTypeOptions<T> & {
    /**
     * The type of values the dynamic property on this prop is expected to
     * produce. Accepts a single type or a list of accepted types.
     */
    valueType: PropertyValueType | readonly PropertyValueType[];
};
export type DynamicPropertyTypeOptions<T extends PropertyType> = OptionalDynamicPropertyTypeOptions<T> | RequiredDynamicPropertyTypeOptions<T>;
export type NumberTypeOptions = TypeOptions<HelioNumber> & {
    minValue?: number;
    maxValue?: number;
    /**
     * Unit suffix displayed next to the numeric input in the editor, e.g. `'px'`
     * or `'ms'`. Purely cosmetic — it does not affect the stored value.
     */
    unit?: string;
};
export type ChildrenTypeOptions = Omit<TypeOptions<HelioChildren>, 'optional' | 'defaultValue' | 'description' | 'visibleIf' | 'enabledIf'> & {
    allowedTraits: Array<string | TraitRef>;
    icon?: IconRef | undefined;
};
export {};
